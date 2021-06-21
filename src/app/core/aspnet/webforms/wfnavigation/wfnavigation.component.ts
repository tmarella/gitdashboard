import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wfnavigation',
  templateUrl: './wfnavigation.component.html',
  styleUrls: ['./wfnavigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WfnavigationComponent implements OnInit {
  sitemap = `<?xml version="1.0" encoding="ISO-8859-1" ?>
  <siteMap>
    <siteMapNode title="Home" url="/aspnet/w3home.aspx">
      <siteMapNode title="Services" url="/aspnet/w3services.aspx">
        <siteMapNode title="Training" url="/aspnet/w3training.aspx"/>
        <siteMapNode title="Support" url="/aspnet/w3support.aspx"/>
      </siteMapNode>
    </siteMapNode>
  </siteMap>`;

  dynamic = `<asp:SiteMapDataSource id="nav1" runat="server" />
  <form runat="server">
  <asp:Menu runat="server" DataSourceId="nav1" />
  </form>`;

  treeview = `<asp:SiteMapDataSource id="nav1" runat="server" />
  <form runat="server">
  <asp:TreeView runat="server" DataSourceId="nav1" />
  </form>`;

  sitemappath = `<form runat="server">
  <asp:SiteMapPath runat="server" />
  </form>`;

  constructor() { }

  ngOnInit(): void {
  }

}
