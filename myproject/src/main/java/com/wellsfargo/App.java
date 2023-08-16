package com.wellsfargo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
       try
       {
    	   Connection connection=DriverManager.getConnection("jdbc:mariadb://localhost:3306/lama","root","Password@1");
    	   System.out.println("mariadb connected...."+connection);
    	   
    	   Statement statement=connection.createStatement();
    	   ResultSet rs=statement.executeQuery("select * from employee");
    	   
    	   while(rs.next())
    	   {
    		   System.out.println(rs.getInt("id")+" "+rs.getNString("first_name")+" "+rs.getString("last_name")+" "+rs.getString("email"));
    	   }
       }
       catch(SQLException se)
       {
    	   se.printStackTrace();
       }
       
    }
}
