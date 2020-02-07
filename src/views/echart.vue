<template>
	<div class="echartContain">
		<div class="content-title">echart数据可视化图表</div>
		<div class="tips">Vue-echarts 绘制图表组件 访问地址：<a class="link-a" :href="$store.state.echartHref" target="_blank">echarts</a></div>
		<div class="contain2">
				  <v-chart class="echart" :options="options"/>
		</div>
		<div class="contain2">
				 <v-chart class="echart" :options="options2" id="echart"/>
		</div>
		<div class="contain2">
				 <v-chart class="echart" :options="options3" id="echart2"/>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			var data =  [{
				name: 'Flora',
				itemStyle: {
					color: '#da0d68'
				},
				children: [{
					name: 'Black Tea',
					value: 1,
					itemStyle: {
						color: '#975e6d'
					}
				}, {
					name: 'Floral',
					itemStyle: {
						color: '#e0719c'
					},
					children: [{
						name: 'Chamomile',
						value: 1,
						itemStyle: {
							color: '#f99e1c'
						}
					}, {
						name: 'Rose',
						value: 1,
						itemStyle: {
							color: '#ef5a78'
						}
					}, {
						name: 'Jasmine',
						value: 1,
						itemStyle: {
							color: '#f7f1bd'
						}
					}]
				}]
			}, {
				name: 'Fruity',
				itemStyle: {
					color: '#da1d23'
				},
				children: [{
					name: 'Berry',
					itemStyle: {
						color: '#dd4c51'
					},
					children: [{
						name: 'Blackberry',
						value: 1,
						itemStyle: {
							color: '#3e0317'
						}
					}, {
						name: 'Raspberry',
						value: 1,
						itemStyle: {
							color: '#e62969'
						}
					}, {
						name: 'Blueberry',
						value: 1,
						itemStyle: {
							color: '#6569b0'
						}
					}, {
						name: 'Strawberry',
						value: 1,
						itemStyle: {
							color: '#ef2d36'
						}
					}]
				}, {
					name: 'Dried Fruit',
					itemStyle: {
						color: '#c94a44'
					},
					children: [{
						name: 'Raisin',
						value: 1,
						itemStyle: {
							color: '#b53b54'
						}
					}, {
						name: 'Prune',
						value: 1,
						itemStyle: {
							color: '#a5446f'
						}
					}]
				}, {
					name: 'Other Fruit',
					itemStyle: {
						color: '#dd4c51'
					},
					children: [{
						name: 'Coconut',
						value: 1,
						itemStyle: {
							color: '#f2684b'
						}
					}, {
						name: 'Cherry',
						value: 1,
						itemStyle: {
							color: '#e73451'
						}
					}, {
						name: 'Pomegranate',
						value: 1,
						itemStyle: {
							color: '#e65656'
						}
					}, {
						name: 'Pineapple',
						value: 1,
						itemStyle: {
							color: '#f89a1c'
						}
					}, {
						name: 'Grape',
						value: 1,
						itemStyle: {
							color: '#aeb92c'
						}
					}, {
						name: 'Apple',
						value: 1,
						itemStyle: {
							color: '#4eb849'
						}
					}, {
						name: 'Peach',
						value: 1,
						itemStyle: {
							color: '#f68a5c'
						}
					}, {
						name: 'Pear',
						value: 1,
						itemStyle: {
							color: '#baa635'
						}
					}]
				}, {
					name: 'Citrus Fruit',
					itemStyle: {
						color: '#f7a128'
					},
					children: [{
						name: 'Grapefruit',
						value: 1,
						itemStyle: {
							color: '#f26355'
						}
					}, {
						name: 'Orange',
						value: 1,
						itemStyle: {
							color: '#e2631e'
						}
					}, {
						name: 'Lemon',
						value: 1,
						itemStyle: {
							color: '#fde404'
						}
					}, {
						name: 'Lime',
						value: 1,
						itemStyle: {
							color: '#7eb138'
						}
					}]
				}]
			}, {
				name: 'Sour/\nFermented',
				itemStyle: {
					color: '#ebb40f'
				},
				children: [{
					name: 'Sour',
					itemStyle: {
						color: '#e1c315'
					},
					children: [{
						name: 'Sour Aromatics',
						value: 1,
						itemStyle: {
							color: '#9ea718'
						}
					}, {
						name: 'Acetic Acid',
						value: 1,
						itemStyle: {
							color: '#94a76f'
						}
					}, {
						name: 'Butyric Acid',
						value: 1,
						itemStyle: {
							color: '#d0b24f'
						}
					}, {
						name: 'Isovaleric Acid',
						value: 1,
						itemStyle: {
							color: '#8eb646'
						}
					}, {
						name: 'Citric Acid',
						value: 1,
						itemStyle: {
							color: '#faef07'
						}
					}, {
						name: 'Malic Acid',
						value: 1,
						itemStyle: {
							color: '#c1ba07'
						}
					}]
				}, {
					name: 'Alcohol/\nFremented',
					itemStyle: {
						color: '#b09733'
					},
					children: [{
						name: 'Winey',
						value: 1,
						itemStyle: {
							color: '#8f1c53'
						}
					}, {
						name: 'Whiskey',
						value: 1,
						itemStyle: {
							color: '#b34039'
						}
					}, {
						name: 'Fremented',
						value: 1,
						itemStyle: {
							color: '#ba9232'
						}
					}, {
						name: 'Overripe',
						value: 1,
						itemStyle: {
							color: '#8b6439'
						}
					}]
				}]
			}, {
				name: 'Green/\nVegetative',
				itemStyle: {
					color: '#187a2f'
				},
				children: [{
					name: 'Olive Oil',
					value: 1,
					itemStyle: {
						color: '#a2b029'
					}
				}, {
					name: 'Raw',
					value: 1,
					itemStyle: {
						color: '#718933'
					}
				}, {
					name: 'Green/\nVegetative',
					itemStyle: {
						color: '#3aa255'
					},
					children: [{
						name: 'Under-ripe',
						value: 1,
						itemStyle: {
							color: '#a2bb2b'
						}
					}, {
						name: 'Peapod',
						value: 1,
						itemStyle: {
							color: '#62aa3c'
						}
					}, {
						name: 'Fresh',
						value: 1,
						itemStyle: {
							color: '#03a653'
						}
					}, {
						name: 'Dark Green',
						value: 1,
						itemStyle: {
							color: '#038549'
						}
					}, {
						name: 'Vegetative',
						value: 1,
						itemStyle: {
							color: '#28b44b'
						}
					}, {
						name: 'Hay-like',
						value: 1,
						itemStyle: {
							color: '#a3a830'
						}
					}, {
						name: 'Herb-like',
						value: 1,
						itemStyle: {
							color: '#7ac141'
						}
					}]
				}, {
					name: 'Beany',
					value: 1,
					itemStyle: {
						color: '#5e9a80'
					}
				}]
			}, {
				name: 'Other',
				itemStyle: {
					color: '#0aa3b5'
				},
				children: [{
					name: 'Papery/Musty',
					itemStyle: {
						color: '#9db2b7'
					},
					children: [{
						name: 'Stale',
						value: 1,
						itemStyle: {
							color: '#8b8c90'
						}
					}, {
						name: 'Cardboard',
						value: 1,
						itemStyle: {
							color: '#beb276'
						}
					}, {
						name: 'Papery',
						value: 1,
						itemStyle: {
							color: '#fefef4'
						}
					}, {
						name: 'Woody',
						value: 1,
						itemStyle: {
							color: '#744e03'
						}
					}, {
						name: 'Moldy/Damp',
						value: 1,
						itemStyle: {
							color: '#a3a36f'
						}
					}, {
						name: 'Musty/Dusty',
						value: 1,
						itemStyle: {
							color: '#c9b583'
						}
					}, {
						name: 'Musty/Earthy',
						value: 1,
						itemStyle: {
							color: '#978847'
						}
					}, {
						name: 'Animalic',
						value: 1,
						itemStyle: {
							color: '#9d977f'
						}
					}, {
						name: 'Meaty Brothy',
						value: 1,
						itemStyle: {
							color: '#cc7b6a'
						}
					}, {
						name: 'Phenolic',
						value: 1,
						itemStyle: {
							color: '#db646a'
						}
					}]
				}, {
					name: 'Chemical',
					itemStyle: {
						color: '#76c0cb'
					},
					children: [{
						name: 'Bitter',
						value: 1,
						itemStyle: {
							color: '#80a89d'
						}
					}, {
						name: 'Salty',
						value: 1,
						itemStyle: {
							color: '#def2fd'
						}
					}, {
						name: 'Medicinal',
						value: 1,
						itemStyle: {
							color: '#7a9bae'
						}
					}, {
						name: 'Petroleum',
						value: 1,
						itemStyle: {
							color: '#039fb8'
						}
					}, {
						name: 'Skunky',
						value: 1,
						itemStyle: {
							color: '#5e777b'
						}
					}, {
						name: 'Rubber',
						value: 1,
						itemStyle: {
							color: '#120c0c'
						}
					}]
				}]
			}, {
				name: 'Roasted',
				itemStyle: {
					color: '#c94930'
				},
				children: [{
					name: 'Pipe Tobacco',
					value: 1,
					itemStyle: {
						color: '#caa465'
					}
				}, {
					name: 'Tobacco',
					value: 1,
					itemStyle: {
						color: '#dfbd7e'
					}
				}, {
					name: 'Burnt',
					itemStyle: {
						color: '#be8663'
					},
					children: [{
						name: 'Acrid',
						value: 1,
						itemStyle: {
							color: '#b9a449'
						}
					}, {
						name: 'Ashy',
						value: 1,
						itemStyle: {
							color: '#899893'
						}
					}, {
						name: 'Smoky',
						value: 1,
						itemStyle: {
							color: '#a1743b'
						}
					}, {
						name: 'Brown, Roast',
						value: 1,
						itemStyle: {
							color: '#894810'
						}
					}]
				}, {
					name: 'Cereal',
					itemStyle: {
						color: '#ddaf61'
					},
					children: [{
						name: 'Grain',
						value: 1,
						itemStyle: {
							color: '#b7906f'
						}
					}, {
						name: 'Malt',
						value: 1,
						itemStyle: {
							color: '#eb9d5f'
						}
					}]
				}]
			}, {
				name: 'Spices',
				itemStyle: {
					color: '#ad213e'
				},
				children: [{
					name: 'Pungent',
					value: 1,
					itemStyle: {
						color: '#794752'
					}
				}, {
					name: 'Pepper',
					value: 1,
					itemStyle: {
						color: '#cc3d41'
					}
				}, {
					name: 'Brown Spice',
					itemStyle: {
						color: '#b14d57'
					},
					children: [{
						name: 'Anise',
						value: 1,
						itemStyle: {
							color: '#c78936'
						}
					}, {
						name: 'Nutmeg',
						value: 1,
						itemStyle: {
							color: '#8c292c'
						}
					}, {
						name: 'Cinnamon',
						value: 1,
						itemStyle: {
							color: '#e5762e'
						}
					}, {
						name: 'Clove',
						value: 1,
						itemStyle: {
							color: '#a16c5a'
						}
					}]
				}]
			}, {
				name: 'Nutty/\nCocoa',
				itemStyle: {
					color: '#a87b64'
				},
				children: [{
					name: 'Nutty',
					itemStyle: {
						color: '#c78869'
					},
					children: [ {
						name: 'Peanuts',
						value: 1,
						itemStyle: {
							color: '#d4ad12'
						}
					}, {
						name: 'Hazelnut',
						value: 1,
						itemStyle: {
							color: '#9d5433'
						}
					}, {
						name: 'Almond',
						value: 1,
						itemStyle: {
							color: '#c89f83'
						}
					}]
				}, {
					name: 'Cocoa',
					itemStyle: {
						color: '#bb764c'
					},
					children: [{
						name: 'Chocolate',
						value: 1,
						itemStyle: {
							color: '#692a19'
						}
					}, {
						name: 'Dark Chocolate',
						value: 1,
						itemStyle: {
							color: '#470604'
						}
					}]
				}]
			}, {
				name: 'Sweet',
				itemStyle: {
					color: '#e65832'
				},
				children: [{
					name: 'Brown Sugar',
					itemStyle: {
						color: '#d45a59'
					},
					children: [{
						name: 'Molasses',
						value: 1,
						itemStyle: {
							color: '#310d0f'
						}
					}, {
						name: 'Maple Syrup',
						value: 1,
						itemStyle: {
							color: '#ae341f'
						}
					}, {
						name: 'Caramelized',
						value: 1,
						itemStyle: {
							color: '#d78823'
						}
					}, {
						name: 'Honey',
						value: 1,
						itemStyle: {
							color: '#da5c1f'
						}
					}]
				}, {
					name: 'Vanilla',
					value: 1,
					itemStyle: {
						color: '#f89a80'
					}
				}, {
					name: 'Vanillin',
					value: 1,
					itemStyle: {
						color: '#f37674'
					}
				}, {
					name: 'Overall Sweet',
					value: 1,
					itemStyle: {
						color: '#e75b68'
					}
				}, {
					name: 'Sweet Aromatics',
					value: 1,
					itemStyle: {
						color: '#d0545f'
					}
				}]
			}];
			return {
				options:{
							 title: {
								 text: 'basic line chart'
							 },
							 tooltip: {
								 trigger: 'none',
								 axisPointer: {
									 type: 'cross'
								 }
				   },
				    xAxis: {
				        type: 'category',
				        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [{
				        data: [820, 932, 901, 934, 1290, 1330, 1320],
				        type: 'line'
				    }]
				},
				options2:{
				    title: {
				        text: '特性示例：渐变色 阴影 点击缩放',
				        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
				    },
							 tooltip: {
							 	 trigger: 'none',
							 	 axisPointer: {
							 		 type: 'cross'
							 	 }
							 },
				    xAxis: {
				        data:  ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'],
				        axisLabel: {
				            inside: true,
				            textStyle: {
				                color: '#fff'
				            }
				        },
				        axisTick: {
				            show: false
				        },
				        axisLine: {
				            show: false
				        },
				        z: 10
				    },
				    yAxis: {
				        axisLine: {
				            show: false
				        },
				        axisTick: {
				            show: false
				        },
				        axisLabel: {
				            textStyle: {
				                color: '#999'
				            }
				        }
				    },
				    dataZoom: [
				        {
				            type: 'inside'
				        }
				    ],
				    series: [
				        { // For shadow
				            type: 'bar',
				            itemStyle: {
				                color: 'rgba(0,0,0,0.05)'
				            },
				            barGap: '-100%',
				            barCategoryGap: '40%',
				            data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500,500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
				            animation: false
				        },
				        {
				            type: 'bar',
				            data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
				        }
				    ]
				},
				options3:{
				     title: {
				            text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
				            subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
				            textStyle: {
				                fontSize: 14,
				                align: 'center'
				            },
				            subtextStyle: {
				                align: 'center'
				            },
				            sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
				        },
				        series: {
				            type: 'sunburst',
				            highlightPolicy: 'ancestor',
				            data: data,
				            radius: [0, '95%'],
				            sort: null,
				            levels: [{}, {
				                r0: '15%',
				                r: '35%',
				                itemStyle: {
				                    borderWidth: 2
				                },
				                label: {
				                    rotate: 'tangential'
				                }
				            }, {
				                r0: '35%',
				                r: '70%',
				                label: {
				                    align: 'right'
				                }
				            }, {
				                r0: '70%',
				                r: '72%',
				                label: {
				                    position: 'outside',
				                    padding: 3,
				                    silent: false
				                },
				                itemStyle: {
				                    borderWidth: 3
				                }
				            }]
				        }
				}
			}
		},
		methods:{
			charTwoClick(){
					  let myChart = this.$echarts.init(document.getElementById('echart'))
					  var zoomSize = 6;
					  myChart.on('click',  (params) => {
					      myChart.dispatchAction({
					          type: 'dataZoom',
					          startValue: this.options2.xAxis.data[Math.max(params.dataIndex - zoomSize / 2, 0)],
					          endValue: this.options2.xAxis.data[Math.min(params.dataIndex + zoomSize / 2, this.options2.series[1].data.length - 1)]
					      });
					  });
			}
		},
		mounted(){
			this.charTwoClick()
		}
	}
</script>

<style lang="stylus">
	.echarts
		flex 1
	
	.echartContain
		width 100%
	
	.contain2
		width 100%
		display flex
	
	#echart2
		min-height 800px
	
	.content-title
		font-weight 400
		line-height 50px
		margin 10px 0
		font-size 22px
		color #1f2f3d
	
	.tips
		padding 20px 10px
		margin-bottom 20px
		background #eef1f6
	
	.link-a
		color #3085DC
		text-decoration none
</style>
