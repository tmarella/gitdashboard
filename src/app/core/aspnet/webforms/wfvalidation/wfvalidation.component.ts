import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wfvalidation',
  templateUrl: './wfvalidation.component.html',
  styleUrls: ['./wfvalidation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WfvalidationComponent implements OnInit {
  regex = `<asp:TextBox runat="server" id="txtNumber" />
  <asp:RegularExpressionValidator runat="server" id="rexNumber" controltovalidate="txtNumber"
  validationexpression="^[0-9]{4}$" errormessage="Please enter a 4 digit number!" />`;

  range = `<asp:TextBox runat="server" id="txtDate" />
  <asp:RangeValidator runat="server" id="rngDate" controltovalidate="txtDate"
  type="Date" minimumvalue="01-01-2006" maximumvalue="31-12-2006"
  errormessage="Please enter a valid date within 2006!" />`;

  required = `<asp:TextBox runat="server" id="txtName" />
  <asp:RequiredFieldValidator runat="server" id="reqName"
  controltovalidate="txtName" errormessage="Please enter your name!" />`;

  compare = `<asp:TextBox runat="server" id="txtSmallNumber" />
  <asp:TextBox runat="server" id="txtBigNumber" />
  <asp:CompareValidator runat="server" id="cmpNumbers" controltovalidate="txtSmallNumber"
  controltocompare="txtBigNumber" operator="LessThan" type="Integer"
  errormessage="The first number should be smaller than the second number!" />`;

  customclient = `<asp:CustomValidator ID="CustomValidator1" runat="server"
  ClientValidationFunction=.cvf_func. ErrorMessage="CustomValidator">
</asp:CustomValidator>`;

  customserver = `<asp:TextBox runat="server" id="txtCustom" />
  <asp:CustomValidator runat="server" id="cusCustom" controltovalidate="txtCustom"
  onservervalidate="cusCustom_ServerValidate" errormessage="The text must be exactly 8 characters long!" />
  <br`;
  summary = `<asp:ValidationSummary ID="ValidationSummary1" runat="server"
  DisplayMode = "BulletList" ShowSummary = "true" HeaderText="Errors:" />`;

  constructor() { }

  ngOnInit(): void {
  }

}
