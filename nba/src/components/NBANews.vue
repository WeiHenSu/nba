<template>
    <div class="newsArea">
        <div class="homeTitle">
            News
        </div>
        <div class="newsListA" >
            <div class="page_newsList" v-for="(item, index) in listNews.slice(pageStart, pageEnd)" :key="index">
                <div class="newsListImg">
                    <a :href="item.newsURL" target="_blank">
                        <img :src="require(`../assets/news${item.newsId}.jpg`)">
                    </a>
                </div>
                <div class="newsListBrief">
                    <div class="newsListDate">
                        {{item.newsDate}}
                    </div>
                    <div class="newsListTitle">
                        <a :href="item.newsURL">
                            {{item.newsTitle}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" @click.prevent="setPage(currentPage-1)">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" :class="{'active': (currentPage === (n))}" v-for="(n, index) in totalPage" :key="index" @click.prevent="setPage(n)"><a class="page-link" href="#">{{ n }}</a></li>
                <li class="page-item" @click.prevent="setPage(currentPage+1)">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

    import Vue from "vue"
    import axios from "axios"
    import VueAxios from "vue-axios";

    Vue.use(VueAxios, axios)
    
    export default {
        name: "NBANews",
        data(){
            return{
                listNews: null,
                perpage: 6,
                currentPage: 1
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.listNews.length / this.perpage)
            },
            pageStart() {
                return (this.currentPage - 1) * this.perpage
                //取得該頁第一個值的index
            },
            pageEnd() {
                return this.currentPage * this.perpage
                //取得該頁最後一個值的index
            }
        },
        methods: {
            async fetchNews(){
                try {
                    const res = await Vue.axios.get("http://localhost:3000/News")
                    this.listNews = res.data
                } catch(error){
                    console.log(error);
                }
            },
            setPage(page) {
                if(page <= 0 || page > this.totalPage) {
                    return
                }
                this.currentPage = page
            }
        },
        created(){
            this.fetchNews()
        }
    }
</script>

<style>
    .newsListA{
        display: flex;
        flex-flow: row wrap;
    }
        .page_newsList{
            width: 33%;
            padding: 0 15px 30px;
        }

        .pagination{
            justify-content: center;
            margin-top: 15px;
        }
            .page-item .page-link{
                color: #333;
                border: unset;
            }
    @media(max-width:990px){
        .page_newsList {
            width: 50%;
        }
    }
    @media(max-width:768px){
        .page_newsList {
            width: 100%;
            padding: 0 0 30px;
        }
    }
</style>