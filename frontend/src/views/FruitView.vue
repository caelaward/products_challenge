<template>
  <div>
     <input type="text" placeholder="fruit.." v-model="prod_name"><br><br>
     <input type="number" placeholder="quantity.. " v-model="quantity">
     <input type="number" placeholder="amount.." v-model="amount"><br><br>
     <input type="text" placeholder="category.." v-model="category">
     <input type="text" placeholder="img url.." v-model="prodURL"><br><br>
    
    <button @click="addFruit">Add products</button>
   

    <table>
        <tr>
            <th>id</th>
            <th>fruit</th>
            <th>quantity</th>
            <th>amount</th>
            <th>category</th>
            <th>img</th>
        </tr>

        <tbody v-for="item in $store.state.fruit" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.prod_name}}</td>
            <td>{{item.quantity}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.category}}</td>
            <td><img :src="item.prodURL" alt=""></td>
            <button @click="delfruit(item.id)">x</button><br><br>
            <button @click="updateProd(item.id)">edit</button>
           
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
     data(){
      return{
        prod_name:'',
        quantity:'',
        amount:'',
        category:'',
        prodURL:''

      }
    },
    methods:{
      delfruit(id){
        this.$store.dispatch('delFruit',id)
      },
      updateProd(id){
        let edit={
          id:id,
          prod_name:this.prod_name,
          quantity:this.quantity,
          amount:this.amount,
          category:this.category,
          prodURL:this.prodURL
        }
        this.$store.dispatch('updateFruit',edit)
      }
    },
  computed:{
     getFruits(){
      this.$store.dispatch('getFruits')
    },
    addFruit(){
      this.$store.dispatch('addFruit',this.$data)
    }

  },
   mounted(){
   this.getFruits
    
  }

}
</script>

<style>
img{
  width:20%
}

</style>