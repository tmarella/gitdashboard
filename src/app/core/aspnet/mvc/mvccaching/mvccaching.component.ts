import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mvccaching',
  templateUrl: './mvccaching.component.html',
  styleUrls: ['./mvccaching.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvccachingComponent implements OnInit {
  cacheProfileConfig = `<caching>
  <outputCacheSettings>
    <outputCacheProfiles>
      <add name="MyCacheProfile"

           duration="30"

           varyByParam="id"

           location="Any" />
    </outputCacheProfiles>
  </outputCacheSettings>
</caching>`;

  cacheProfileUsage = `[OutputCache(CacheProfile = "MyCacheProfile")]
public ActionResult Dummy()
{
    return View();
}`;

applicationCaching = `public ActionResult Index3()
{
    if (System.Web.HttpContext.Current.Cache["time"] == null)
    {
        System.Web.HttpContext.Current.Cache["time"] = DateTime.Now;
    }

    ViewBag.Time = ((DateTime)System.Web.HttpContext.Current.Cache["time"]).ToString();
    return View();
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
