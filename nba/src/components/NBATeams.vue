<template>
    <div class="teams">
        <div class="teamsTitle">
            Teams
        </div>
        <div class="teamsListA">
            <div class="teamsList" v-for="(item, index) in listTeams" :key="index">
                <div class="teamsImg">
                    <a :href="`https://www.nba.com/${item.urlName}`" target="_blank">
                        <img :src="`https://cdn.nba.com/logos/nba/${item.teamId}/global/L/logo.svg`" />
                    </a>
                </div>
                <div class="teamsName">
                    {{item.fullName}}
                </div>
            </div>
        </div>
    </div>
</template>
<script >

import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, axios)
export default {
    name: "NBATeams",
    data() {
        return {
            listTeams: null,
        }
    },
    methods: {
        async fetchTeams(){
            try {
                const res= await Vue.axios.get("http://localhost:3000/teams")
                this.listTeams = res.data
            } catch (error) {
                console.log(error);
            }
        }

    },
    created() {
        this.fetchTeams()
    }
}
</script>

<style>
.teams{
    padding: 50px 0;
}
    .teamsTitle{
        font-size: 36px;
        font-weight: bold;
        line-height: 72px;
        margin-bottom: 25px;
    }
        .teamsListA{
            display: flex;
            flex-flow: row wrap;
        }
            .teamsList{
                width: 25%;
                padding: 25px 0;
            }
            .teamsList:hover{
                box-shadow: 2px 2px 10px 2px #333;
                transition: 0.3s ease all;
            }
                .teamsImg{
                    width: 250px;
                    height: 250px;
                    margin: 0 auto;
                }
                .teamsImg a{
                    display: block;
                }
                .teamsName{
                    font-size: 24px;
                    font-weight: bold;
                    line-height: 1.5;
                }
@media(max-width:1200px){
    .teamsImg {
        width: 200px;
        height: 200px;
    }
}

@media(max-width:990px){
    .teams {
        padding: 25px 0;
    }
        .teamsTitle {
            font-size: 28px;
            line-height: 56px;
            margin-bottom: 10px;
        }
            .teamsList {
                width: 33.3%;
                padding: 15px 0;
            }
                .teamsName {
                    font-size: 20px;
                }
                .teamsImg {
                    width: 175px;
                    height: 175px;
                }
}
@media(max-width:768px){
    .teamsList {
        width: 50%;
    }
}
@media(max-width:425px){
    .teamsList {
        width: 100%;
    }
        .teamsImg {
            width: 200px;
            height: 200px;
        }
        .teamsName {
            font-size: 24px;
        }
}
</style>