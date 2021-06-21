import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wfcontrols',
  templateUrl: './wfcontrols.component.html',
  styleUrls: ['./wfcontrols.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WfcontrolsComponent implements OnInit {
  registerControl = `<configuration>

  <system.web>

    <pages>
      <controls>
        <add tagPrefix="scottgu" src="~/Controls/Header.ascx" tagName="header"/>
        <add tagPrefix="scottgu" src="~/Controls/Footer.ascx" tagName="footer"/>
        <add tagPrefix="ControlVendor" assembly="ControlVendorAssembly"/>
      </controls>
    </pages>

  </system.web>

</configuration>`;

  usageRegisterControl = `<html>
<body>
    <form id="form1" runat="server">
        <scott:header ID="MyHeader" runat="server" />
    </form>
</body>
</html>`;

  constructor() { }

  ngOnInit(): void {
  }

}
