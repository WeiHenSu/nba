<template>
    <div class="homeArea">
        <!-- 新聞區塊 -->
        <div class="newsArea">
            <div class="homeTitle">
                News
            </div>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in listNews" :key="index">
                        <div class="newsList">
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
                </div>
                <div class="swiper-button-prev btn-left"></div>
                <div class="swiper-button-next btn-right"></div>
            </div>
            <div class="readMore">
                <router-link class="readMoreBtn" to="/news">READ MORE<i class="bi bi-arrow-right"></i></router-link>
            </div>
        </div>
        <!-- 今日比賽區塊 -->
        <div class="matchArea">
            <div class="homeTitle">
                Today's Matches
            </div>
            <div class="matchListA" v-for="(item, index) in matchInfo" :key="index">
                <div class="matchLList">
                    <div class="matchL_team">
                        <div class="matchL_teamImg">
                            <img :src="`https://cdn.nba.com/logos/nba/${item.awayTeam.teamId}/global/L/logo.svg`" />
                        </div>
                        <div class="matchL_teamName">
                            {{item.awayTeam.teamName}}
                        </div>
                        <div class="matchL_teamRecord">
                            <span class="win">{{item.awayTeam.wins}}</span>
                            <span class="dash">-</span>
                            <span class="lose">{{item.awayTeam.losses}}</span>
                        </div>
                    </div>
                    <div class="matchL_teamScore">
                        <div class="matchL_teamLScore">
                            {{item.awayTeam.score}}
                        </div>
                        <div class="matchL_teamMScore">
                            {{item.gameStatusText}}
                        </div>
                        <div class="matchL_teamRScore">
                            {{item.homeTeam.score}}
                        </div>
                    </div>
                    <div class="matchL_team">
                        <div class="matchL_teamImg">
                            <img :src="`https://cdn.nba.com/logos/nba/${item.homeTeam.teamId}/global/L/logo.svg`" />
                        </div>
                        <div class="matchL_teamName">
                            {{item.homeTeam.teamName}}
                        </div>
                        <div class="matchL_teamRecord">
                            <span class="win">{{item.homeTeam.wins}}</span>
                            <span class="dash">-</span>
                            <span class="lose">{{item.homeTeam.losses}}</span>
                        </div>
                    </div>
                </div>
                <div class="matchRList">
                    <div class="matchR_title">
                        GAME LEADERS
                    </div>
                    <table class="matchR_gameLeaderA">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="pts">PTS</th>
                                <th class="reb">REB</th>
                                <th class="ast">AST</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- awayLeaders -->
                            <tr class="matchR_gameLeaderCard">
                                <td class="matchR_gameLeaderCardInfo">
                                    <div class="matchR_gameLeaderImg">
                                        <img :src="`https://cdn.nba.com/headshots/nba/latest/260x190/${item.gameLeaders.awayLeaders.personId}.png`">
                                    </div>
                                    <div class="matchR_gameLeaderInfo">
                                        <div class="matchR_gameLeaderName">
                                            <a :href="`https://www.nba.com/player/${item.gameLeaders.awayLeaders.personId}/`" target="_blank">
                                                <span class="">{{item.gameLeaders.awayLeaders.name}}</span>
                                            </a>
                                        </div>
                                        <div class="matchR_gameLeaderBrief">
                                            <span class="">{{item.gameLeaders.awayLeaders.teamTricode}}</span>
                                            <span class="">{{item.gameLeaders.awayLeaders.jerseyNum}}</span>
                                            <span class="">{{item.gameLeaders.awayLeaders.position}}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="ptsPoint">{{item.gameLeaders.awayLeaders.points}}</td>
                                <td class="rebPoint">{{item.gameLeaders.awayLeaders.rebounds}}</td>
                                <td class="astPoint">{{item.gameLeaders.awayLeaders.assists}}</td>
                            </tr>
                            <!-- homeLeaders -->
                            <tr class="matchR_gameLeaderCard">
                                <td class="matchR_gameLeaderCardInfo">
                                    <div class="matchR_gameLeaderImg">
                                        <img :src="`https://cdn.nba.com/headshots/nba/latest/260x190/${item.gameLeaders.homeLeaders.personId}.png`">
                                    </div>
                                    <div class="matchR_gameLeaderInfo">
                                        <div class="matchR_gameLeaderName">
                                            <a :href="`https://www.nba.com/player/${item.gameLeaders.homeLeaders.personId}/`" target="_blank">
                                                <span class="">{{item.gameLeaders.homeLeaders.name}}</span>
                                            </a>
                                        </div>
                                        <div class="matchR_gameLeaderBrief">
                                            <span class="">{{item.gameLeaders.homeLeaders.teamTricode}}</span>
                                            <span class="">{{item.gameLeaders.homeLeaders.jerseyNum}}</span>
                                            <span class="">{{item.gameLeaders.homeLeaders.position}}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="ptsPoint">{{item.gameLeaders.homeLeaders.points}}</td>
                                <td class="rebPoint">{{item.gameLeaders.homeLeaders.rebounds}}</td>
                                <td class="astPoint">{{item.gameLeaders.homeLeaders.assists}}</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, axios)

import Swiper, { Navigation } from 'swiper'
import '../../node_modules/swiper/swiper-bundle.css'
Swiper.use([Navigation]);

export default {
    name:'NBAHome',
    data() {
        return {
            listNews: null,
            listMatch: null,
            matchDate: null,
            matchInfo: null
        }
    },
    methods: {
        async fetchNews(){
            try {
                const res= await Vue.axios.get("http://localhost:3000/news")
                this.listNews = res.data
            } catch (error) {
                console.log(error);
            }
        },
        async fetchMatch(){
            try {
                const res= await Vue.axios.get("http://localhost:3000/scoreboard")
                this.listMatch = res.data
                this.listMatch.forEach(e => {
                    this.matchDate = e.gameDate
                    this.matchInfo = e.games
                })
                console.log(this.matchInfo)
            } catch (error) {
                console.log(error);
            }
        }

    },
    created() {
        this.fetchNews()
        this.fetchMatch()
    },
    mounted() {
            new Swiper('.swiper', {
                slidesPerView: 1,
                // centeredSlides: true,
                loop: true,
                // autoplay: {
                //     delay: 1000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true
                // },
                navigation: {
                    nextEl: '.swiper .swiper-button-next',
                    prevEl: '.swiper .swiper-button-prev',
                },
                breakpoints: {
                    769: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                },
            })
        }
    };
</script>

<style>
.matchArea{
    padding-bottom: 50px;
}
    .matchListA{
        display: flex;
        flex-flow: row wrap;
        margin-bottom: 25px;
        border: 1px solid #ccc;
    }
        .matchLList{
            display: flex;
            flex-flow: row wrap;
            width: 50%; 
            padding: 15px 5px; 
            border-right: 1px solid #ccc;
        }
            .matchL_team{
                display: flex;
                flex-direction: column;
                width: 25%;
            }
                .matchL_teamImg{
                    margin: 0 auto;
                }

                .matchL_teamName{
                    font-weight: bold;
                }

                .matchL_teamRecord{
                    
                }

                .matchL_teamRecord span{
                    display: inline-block;
                    vertical-align: middle;
                }
                .matchL_teamRecord span.dash{
                    padding: 0 5px;
                    margin-bottom: 3px;
                }

                .matchL_teamImg img{
                    width: 100%;
                    height: auto;
                }

                .matchL_teamScore{
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }
                    .matchL_teamLScore{
                        text-align: left;
                        width: 33.3%;
                        font-size: 28px;
                        font-weight: bold;
                    }

                    .matchL_teamMScore{
                        text-align: center;
                        width: 33.3%;
                        font-size: 18px;
                    }

                    .matchL_teamRScore{
                        text-align: right;
                        width: 33.3%;
                        font-size: 28px;
                        font-weight: bold;
                    }


        .matchRList{
            width: 50%;
            padding: 10px 5px;
        }  
            .matchR_title{
                font-size: 20px;
                font-weight: bold;
                padding: 0 0 5px 15px;
                text-align: left;
            }

            .matchR_gameLeaderA{
                width: 100%;
            }

            .matchR_gameLeaderCard{
                border-bottom: 1px solid #ccc;
            }

            .matchR_gameLeaderCard:last-child{
                border-bottom: unset;
            }

            .matchR_gameLeaderCardInfo{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                padding: 5px 0px;
            }

            .matchR_gameLeaderA thead{
                border-bottom: 1px solid #ccc;
            }

            .matchR_gameLeaderImg{
                width: 100px;
                margin: 0 auto;
            }

            .matchR_gameLeaderImg img{
                width: 100%;
                height: auto;
            }

            .matchR_gameLeaderInfo{
                width: calc(100% - 125px);
            }
                .matchR_gameLeaderName a{
                    color: #333;
                    text-decoration: none;
                }
                .matchR_gameLeaderName a:hover{
                    color: #084298;
                    transition: 0.3s ease all;
                }

                .matchR_gameLeaderBrief span{
                }

                .matchR_gameLeaderBrief span::after{
                    content: "-";
                    display: inline-block;
                    vertical-align: middle;
                    top: 50%;
                    right: 0;
                    margin: 0 5px 5px 5px;
                }
                .matchR_gameLeaderBrief span:last-child::after{
                    display: none;
                }


.newsArea{
    padding: 50px 0;
}
    .homeTitle{
        font-size: 36px;
        font-weight: bold;
        line-height: 72px;
        margin-bottom: 25px;
    }
    .swiper-slide {
        color: #333;
        text-align: center;
    }
    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 12px;
    }
    .btn-left,
    .btn-right {
        outline: 0;
        padding: 0;
        margin: 0;
        height: 36px;
        width: 36px;
        line-height: 36px;
        cursor: pointer;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
        color: #000;
        position: absolute;
        top: 50%;
        z-index: 10;
        transform: translateY(-50%);
        text-align: center;
        font-size: 12px;
    }
    .newsList{
        overflow: hidden;
    }
        .newsListImg{

        }
        .newsList:hover .newsListImg{
            transform: scale(1.1);
            opacity: 0.8;
            transition: 0.3s ease all;
            margin-bottom: 5px;
        }
        .newsListImg a{
            display: block;
        }
        .newsListImg a img{
            width: 100%;
            height: auto;
        }
        .newsListBrief{
            border: 1px solid #ccc;
            padding: 15px 10px;
        }
            .newsListTitle{
                font-size: 18px;
                font-weight: bold;
                line-height: 1.2;
                letter-spacing: 1px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-align: left;
            }
            .newsListTitle a{
                color: #333;
                text-decoration: none;
                display: block;
            }
            .newsListTitle a:hover{
                color: #084298;
                transition: 0.3s ease all;
            }
            .newsListDate{
                font-size: 14px;
                line-height: 1.1;
                color: #A0A0A0;
                margin-bottom: 10px;
                text-align: left;
            }
    
    .readMore{
        padding: 15px 0 0;
        text-align: right;
    }
    .readMore a{
        text-decoration: none;
        color: #898383;
        display: block;
        font-size: 14px;
    }
    .readMore a:hover{
        color: #084298;
        transition: 0.3s ease all;
    }
    .readMore a i{
        margin-left: 5px;
        font-size: 14px;
    }

    @media(max-width:990px){
        .matchLList{
            width: 100%;
            border-bottom: 1px solid #ccc;
        }
        .matchRList{
            width: 100%;
        }
    }
    @media(max-width:425px){
        .newsArea {
            padding: 25px 0;
        }
            .homeTitle {
                font-size: 28px;
                line-height: 1.5;
            }
                .newsListDate {
                    font-size: 12px;
                }
                .newsListTitle {
                    font-size: 16px;
                }
                .matchR_title {
                    font-size: 18px;
                    padding: 0 0 5px 5px;
                }
                    .matchR_gameLeaderImg {
                        width: 85px;
                        margin: 0 auto;
                    }
                        .matchR_gameLeaderName{
                            font-size: 14px;
                        }
                        .matchR_gameLeaderBrief{
                            font-size: 12px;
                        }
                        .pts,.reb,.ast{
                            font-size: 14px;
                        }
                        .ptsPoint,.rebPoint,.astPoint{
                            font-size: 16px;
                        }
    }
</style>