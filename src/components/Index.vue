<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="green-text"> {{ smoothie.title }}</h2>
        <ul class="indgredients">
          <li v-for="(ing,index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span> 
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab orange">
        <router-link :to="{ name : 'EditSmoothie', params: {smoothie_slug : smoothie.slug } }">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name : 'Index',
  data(){
    return{
      smoothies: [
          // { title : 'Ninja Brew',slug: 'ninja-brew', indgredients : ['Banana', 'coffee', 'latte', 'sugar', 'creame'], id : '1'},
          // { title : 'Home Shake', slug : 'home-shake', indgredients : ['Tea', 'Milk', 'Honey', 'Mocha', 'Chia'], id : '2'}
      ]

    }
  },
  methods :{
    //Delete the smoothing from database and frontend
    deleteSmoothie(id){
      db.collection('smoothies').doc(id).delete()
      .then(()=>{
        this.smoothies = this.smoothies.filter(smoothie =>{
          return smoothie.id != id
        }) 
      })
      // this.smoothies = this.smoothies.filter( smoothie =>{
      //   return smoothie.id != id
      // })
    }
  },
  created(){
    db.collection('smoothies').get()
    .then(snapshot =>{
      snapshot.forEach( doc =>{
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    })
  }
}
</script>


<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 60px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}
.index .indgredients{
  margin: 30px auto;
}
.index .indgredients li{
  display: inline-block;
}
.index .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  color : #aaa;
  cursor: pointer;
  font-size: 1.6em;
}
</style>