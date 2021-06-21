import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mvcvalidation',
  templateUrl: './mvcvalidation.component.html',
  styleUrls: ['./mvcvalidation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvcvalidationComponent implements OnInit {

  modelStateHtml = `
  //Mockup for textBox
  @Html.LabelFor(m => m.Name)
  @Html.TextBoxFor(m => m.Name)
  @Html.ValidationMessageFor(m => m.Name)`;
  modelStateCs = `
  if(string.IsNullOrEmpty(sm.Name))
  {
      ModelState.AddModelError("Name", "Name Required"); //set err msg
  }
      if (ModelState.IsValid)  //validate form
      {
          ViewBag.name = sm.Name;
          ViewBag.age = sm.Age;
          return View("Index");
      }
  }
`;
regEx = `[RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$",
ErrorMessage="Please enter valid email id.")]
public string EmailId { get; set; }`;

jQuery = `<configuration>
<appSettings>
    <add key="ClientValidationEnabled" value="true" />
    <add key="UnobtrusiveJavaScriptEnabled" value="true" />
</appSettings>
</configuration>  `;

customValidator = `
using System.ComponentModel.DataAnnotations;

public class ValidJoinDate : ValidationAttribute
{
    protected override ValidationResult
            IsValid(object value, ValidationContext validationContext)
    {
        DateTime _dateJoin = Convert.ToDateTime(value);
        if (_dateJoin < DateTime.Now)
        {
            return ValidationResult.Success;
        }
        else
        {
            return new ValidationResult
                ("Join date can not be greater than current date.");
        }
    }
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
