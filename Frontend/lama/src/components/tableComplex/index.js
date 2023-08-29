import {
    Flex,
    Table,
    Progress,
    Icon,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    Button
  } from "@chakra-ui/react";
  import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
  import React, { useEffect, useMemo, useState } from "react";
  import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
  } from "react-table";

  // import { useAlert } from "react-alert";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
  
  // Custom components
  import Card from "../card/Card";
  import Menu from "../menu/MainMenu";
  import axios from 'axios';
  import { useHistory } from "react-router-dom";
  
  // Assets
  import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { privateAxios } from "../../services/helper";
  export default function ColumnsTable({ columnsData, tableData, header, flagUnapproved=false, showOptions=true }) {

    const history = useHistory()
    // const { columnsData, tableData, header } = this.props;
  
    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);
    const [error, setError] = useState(null)
    const [isCreated, setIsCreated] = useState(false)

    useEffect(() => {
      if(isCreated){
        toast("Loan Approved Successfully",
           {position: toast.POSITION.BOTTOM_CENTER})
        setIsCreated(false)
        // history.push("/customermap")
      }
      if(error){
        toast.error(error,
        {position: toast.POSITION.BOTTOM_CENTER})
        setError(null)
      }
    },[isCreated,error])
  
    const approveLoan = async (row, approveState) => {
      // e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("employeeId", row.employeeId);
      myForm.set("issueId", row.issueId);
      myForm.set("itemId", row.itemId);
      myForm.set("issueDate", row.issueDate);
      myForm.set("durationInMonths", row.durationInMonths);
      myForm.set("isApproved", approveState);
      
  
      const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
  
      await privateAxios.post(`/admin/issues/`, myForm, config)
      .then((response) => {
        console.log(response.data)
        setIsCreated(true)
      })
      .catch((err) => {
        console.log(err.message)
        setError(err.message)
      })
      
      // dispatch(createProduct(myForm));
    };

    // console.log("tableComplex" ,data.length)
  
    const tableInstance = useTable(
      {
        columns,
        data,
      },
      useGlobalFilter,
      useSortBy,
      usePagination
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      initialState,
    } = tableInstance;
    initialState.pageSize = data.length;

    // console.log(page.length)

    // const alert = useAlert();
  
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const [isDeleted, setIsDeleted] = useState(false)
    const [deleteError, setDeleteError] = useState("")

    const deleteEmployee = async (id) => {
      // console.log("http://localhost:8181/api/v1/admin/employee/"+id)
        await privateAxios.delete("/admin/employee/"+id)
        .then((response) => {setIsDeleted(true); console.log(response.data)})
        .catch((err) => {setDeleteError(err.message); console.log(err.message)})

    }

    const updateEmployee = async (id) => {
      const url = "/employee/"+id;
      console.log("url ",url)
      history.push(url)
    }

    useEffect(() => {
      if(isDeleted){
        toast("Employee Deleted Successfully",
           {position: toast.POSITION.BOTTOM_CENTER})
        setIsDeleted(false)
      }
      if(deleteError){
        toast.error(deleteError,
        {position: toast.POSITION.BOTTOM_CENTER})
        setDeleteError(null)
      }
    },[isDeleted,deleteError])

    return (
      <Card
        direction='column'
        w='100%'
        px='0px'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex px='25px' justify='space-between' mb='10px' align='center'>
          <Text
            color={textColor}
            fontSize='22px'
            fontWeight='700'
            lineHeight='100%'>
            {header}
          </Text>
          <Menu />
        </Flex>
        <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe='10px'
                    key={index}
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      {column.render("Header")}
                    </Flex>
                  </Th>
                ))}
                {showOptions ?<Th
                    // {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe='10px'
                    key={index}
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Options
                    </Flex>
                  </Th>:null}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    // console.log("Header name",cell.row.original.employeeId)
                    // if (cell.column.Header === "NAME") {
                      data = (
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      );
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        maxH='30px !important'
                        py='8px'
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        {data}
                      </Td>
                    );
                  })}
                  {showOptions?<Td
                        
                        key={index}
                        fontSize={{ sm: "14px" }}
                        maxH='30px !important'
                        py='8px'
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        {flagUnapproved? 
                        <div>
                          <Button variant="variant" style={{margin:"0px", backgroundColor:"black"}} onClick={()=>{approveLoan(row.original, 1)}}>Approve</Button>
                          <Button variant="variant" style={{margin:"0px", backgroundColor:"black"}} onClick={()=>{approveLoan(row.original, 2)}}>Reject</Button> 
                        </div>
                        :
                        <div>
                          <Button variant="secondary" style={{margin:"5px"}}><Trash3Fill onClick={()=>{deleteEmployee(row.original.employeeId)}}></Trash3Fill></Button>
                          <Button variant="secondary" style={{margin:"5px"}}><PencilFill onClick={() => {updateEmployee(row.original.employeeId)}}></PencilFill></Button>
                        </div>
            }
                        {/* deleteEmployee(row.cells.row.original.employeeId) */}
                    </Td>:null}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <ToastContainer />
      </Card>
    );
  }
  