<template>
    <div class='jumbotron jumbotron-fluid py-5' style='background: url("./banner1.jpg") right bottom; color: black;'>
        <div class='container'>
            <h3>Customer Name</h3>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Banner'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.jumbotron {
  border-bottom: 2px solid #32a6ad;
  border-top: 2px solid #32a6ad;
}
</style>
