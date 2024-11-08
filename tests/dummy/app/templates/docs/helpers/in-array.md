# In array

The first argument is an array, and then second is the string to find in it. Returns `true` if it is present, and `false` if it is not.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text" as |demo|>
  <demo.example @name="in-array" class="viewport">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Senior</th>
          <th>Junior</th>
          <th>Intern</th>
        </tr>
      </thead>
      <tbody>
        {{#each this.model.all as | employee |}}
          <tr>
            <td>{{employee}}</td>
            <td>{{ember-skeleton/in-array this.model.seniorEmployees employee}}</td>
            <td>{{ember-skeleton/in-array this.model.juniorEmployees employee}}</td>
            <td>{{ember-skeleton/in-array this.model.interns employee}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
    {{#each this.model.all as | employee |}}
      
    {{/each}}
  </demo.example>
  <demo.snippet @name="in-array" @label="Template" @language="htmlbars" />
  <demo.snippet @name="employee-levels.js" @label="Model" @language="javascript" />
</DocsDemo>
</div>
