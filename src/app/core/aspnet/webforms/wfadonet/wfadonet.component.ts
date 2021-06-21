import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wfadonet',
  templateUrl: './wfadonet.component.html',
  styleUrls: ['./wfadonet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WfadonetComponent implements OnInit {

  executeNonQueryVb = `Dim cmLog As New sc.SqlCommand
  With cmLog
      .Connection = cnSQL
      .CommandType = CommandType.StoredProcedure
      .CommandText = "MNLSP_LogUserEmulationInsert"

      'add input parms
      .Parameters.AddWithValue("@SiteID", strSiteID)
      .Parameters.AddWithValue("@UserID", strUserID)
  End With

  cnSQL.Open()
  cmLog.ExecuteNonQuery()
  cnSQL.Close()
`;

  executeNonQueryCsharp = `SqlConnection con = new SqlConnection(@"Data Source=.\SQLEXPRESS;Initial Catalog=ComputerShop;Integrated Security=True");
  string query =
  @"CREATE TABLE dbo.Products
      (
          ID int IDENTITY(1,1) NOT NULL,
          Name nvarchar(50) NULL,
          Price nvarchar(50) NULL,
          Date datetime NULL,
          CONSTRAINT pk_id PRIMARY KEY (ID)
      );";
  SqlCommand cmd = new SqlCommand(query, con);
  try
  {
      con.Open();
      cmd.ExecuteNonQuery();
      Console.WriteLine("Table Created Successfully");
  }
  catch(SqlException e)
  {
      Console.WriteLine("Error Generated. Details: " + e.ToString());
  }
  finally
  {
      con.Close();
      Console.ReadKey();
  }`;

  executeReaderCsharp = `SqlConnection con = new SqlConnection(@"Data Source=.\SQLEXPRESS;Initial Catalog=ComputerShop;Integrated Security=True");
  string query =
    @"
      select SPECIFIC_NAME from ComputerShop.information_schema.routines where routine_type = 'PROCEDURE'
  ";

  SqlCommand cmd = new SqlCommand(query, con);
  try
  {
      con.Open();
      SqlDataReader dr = cmd.ExecuteReader();
      while (dr.Read())
      {
          Console.WriteLine(dr["SPECIFIC_NAME"].ToString());
      }
  }
  catch (SqlException e)
  {
      Console.WriteLine("Error Generated. Details: " + e.ToString());
  }
  finally
  {
      con.Close();
      Console.ReadKey();
  }`;

  sqlDataAdapterCsharp = `string ConString = @"Data Source=SQLEXPRESS;Initial Catalog=ComputerShop;Integrated Security=True";
  string querystring = "Select * from Items";
  SqlDataAdapter adapter = new SqlDataAdapter(querystring, ConString);
  DataSet ds = new DataSet();
  adapter.Fill(ds, "Items");
  Console.WriteLine(ds.GetXml());
  Console.ReadKey();`;

  sqlDataAdapterVb = `Dim cmGetSecurityData As New sc.SqlCommand
  Dim daGetLogin As New sc.SqlDataAdapter
  Dim dsGetLogin As New DataSet

Try
      With cmGetSecurityData
          .Connection = cnSQL 'cnSQL is a global variable defined up in the public class
          .CommandText = "MNLSP_Get_Security_Data"
          .CommandType = CommandType.StoredProcedure

          'add input parms
          .Parameters.AddWithValue("@Username", strUsername)

          'add output parm
          prmOutput.Direction = ParameterDirection.Output
          .Parameters.Add(prmOutput)
      End With

      cnSQL.Open()
      daGetLogin.SelectCommand = cmGetSecurityData
      daGetLogin.Fill(dsGetLogin)
      cnSQL.Close()
`;

  constructor() { }

  ngOnInit(): void {
  }

}
