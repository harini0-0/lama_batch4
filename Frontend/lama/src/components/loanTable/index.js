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

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
  import Card from "../card/Card";
  import Menu from "../menu/MainMenu";
  import axios from 'axios';
  import { useHistory } from "react-router-dom";
  import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
  export default function ColumnsTable({ columnsData, tableData, header }) {

    const history = useHistory()
  
    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);
  
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

  
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const [isDeleted, setIsDeleted] = useState(false)
    const [deleteError, setDeleteError] = useState("")

    const deleteLoan = async (id) => {
        await axios.delete("http://localhost:8181/api/v1/admin/loan/"+id)
        .then((response) => {setIsDeleted(true); console.log(response.data)})
        .catch((err) => {setDeleteError(err.message); console.log(err.message)})
    }

    const updateLoan = async (id) => {
      const url = "/loan/"+id;
      console.log("url ",url)
      history.push(url)
    }

    useEffect(() => {
      if(isDeleted){
        toast("Loan Deleted Successfully",
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
                <Th
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
                  </Th>
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
                  <Td
                        
                        key={index}
                        fontSize={{ sm: "14px" }}
                        maxH='30px !important'
                        py='8px'
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <Button variant="secondary" style={{margin:"5px"}}><Trash3Fill onClick={()=>{deleteLoan(row.original.loanId)}}></Trash3Fill></Button>
                        <Button variant="secondary" style={{margin:"5px"}}><PencilFill onClick={() => {updateLoan(row.original.loanId)}}></PencilFill></Button>
                        {/* deleteEmployee(row.cells.row.original.employeeId) */}
                    </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <ToastContainer />
      </Card>
    );
  }