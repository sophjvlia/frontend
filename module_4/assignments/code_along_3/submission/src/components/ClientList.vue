<template>
  <div id="client-list">
    <table>
        <tr>
            <td>Company</td>
            <td>Contact</td>
            <td>Country</td>
        </tr>
        <tr>
            <td>Mary's Bookstore</td>
            <td>Lenny O'Ryan</td>
            <td>Australia</td>
        </tr>
        <tr>
            <td>Chang's Kitchen</td>
            <td>Priscilla Chang</td>
            <td>Singapore</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    beforeCreate() {
        console.log('beforeCreate()')
    },
    created() {
        console.log('created()')
    }
}
</script>

<style>
    #client-list {
        border: 2px solid red;
        padding: 5px;
    }

    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 5px;
    }
</style>