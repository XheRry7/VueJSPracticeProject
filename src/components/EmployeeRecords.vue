d
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3">Employee</p>
        <ul class="list-group">
          <li class="list-group-item">
            Employee name is : {{ this.employee.name }}
          </li>
          <li class="list-group-item">
            Employee age is : {{ this.employee.Age }}
          </li>
          <li class="list-group-item">
            Employee description is : {{ this.employee.Description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeRecords",
  data: function () {
    return {
      employee: {
        name: "Shehryar",
        Age: 22,
        Description: "Lorem ipsum",
      },
    };
  },
};
</script>

<style></style>
