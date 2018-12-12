<template>
  <div class="navigation">   
	<nav>
		<router-link v-for="routes in links"
		v-bind:key="routes-id"
		:to=`$routes.page`>{{ routes.text }}</router-link>
	</nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
	return {
		links: [
			{
				id: 0,
				text: 'Home',
				page: '/Home'
			
			},
			{
				id: 1,
				text: 'About',
				page: '/About'
			
			},
			{
				id: 2,
				text: 'Contact',
				page: '/Contact'
			
			}			
		]
	}
  }
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
.spacing {
	margin-right: 10px;
}
</style>
