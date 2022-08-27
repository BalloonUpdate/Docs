// 在页脚显示版权文字和贡献者信息
(function(){
    var plugin = function(hook) {
        hook.afterEach(function(html) {

            setTimeout(() => {
                let githubContributors = {
                    data: () => ({
                        contributors: []
                    })
                }

                let vue = new (Vue.extend(githubContributors))().$mount('#github-contributors')
                let repos = [
                    'https://api.github.com/repos/balloonupdate/Docs/contributors',
                    'https://api.github.com/repos/balloonupdate/Tool/contributors',
                    'https://api.github.com/repos/balloonupdate/JarClient/contributors',
                    'https://api.github.com/repos/balloonupdate/LittleServer/contributors',
                    'https://api.github.com/repos/balloonupdate/ExeClient/contributors',
                    'https://api.github.com/repos/balloonupdate/ModClient/contributors',
                    'https://api.github.com/repos/balloonupdate/BalloonServer/contributors',
                ]

                vue.contributors = []

                for (const repo of repos)
                    fetch(repo).then((r) => r.json()).then((data) => {

                        for (let i = 0;i < data.length;i++)
                        {
                            let idx = findIndex(data[i], vue.contributors)
                            if(idx != -1)
                            {
                                if(data[i]['contributions'] > vue.contributors[idx]['contributions'])
                                    vue.contributors[idx] = data[i]
                            } else {
                                vue.contributors.push(data[i])
                            }
                        }

                        vue.contributors = vue.contributors.sort((a, b) => b['contributions'] - a['contributions'])

                        console.log(vue.contributors)
                    })
            }, 150);
            
            return html+`
            <hr style="margin-top: 5rem;" />
            <div id="github-contributors">
                <div class="github-contributor-title">Copyleft © 2021 - 2022 <a href="https://github.com/balloonupdate">BalloonUpdate</a></div>
                <div class="github-contributor-title" v-show="contributors.length > 0"> | </div>
                <div class="github-contributor-title" v-show="contributors.length > 0">Contributors: </div>
                <div v-for="c in contributors" class="github-contributor-user" v-show="contributors.length > 0">
                    <img v-bind:src="c.avatar_url" class="github-contributor-avatar" />
                    <div class="github-contributor-username" ><a v-bind:href="c.html_url" target="_blank">{{c.login}}<a/></div>
                </div>
            </div>
            <style>
                #github-contributors {
                    display: flex;
                    align-items: center;
                    opacity: 0.8;
                    flex-wrap: wrap;
                }

                .github-contributor-title {
                    margin: 6px 10px;
                    font-size: 16px;
                    font-weight: bold;
                    color: inherit;
                    white-space: nowrap;
                }

                .github-contributor-user {
                    display: inline-flex;
                    align-items: center;
                    margin-right: 4px;
                }

                .github-contributor-avatar {
                    height: 28px;
                    /* padding: 2px; */
                    /* border: 1px solid #cecece; */
                    border-radius: 50%;
                    box-shadow: 3px 4px 8px #00000014;
                }

                .github-contributor-username {
                    margin: 0 8px;
                    font-size: 16px;
                    // font-weight: bold;
                    color: inherit;
                }
            </style>
            `;

            function findIndex(el, array)
            {
                let index = -1
                for (let i = 0;i < array.length;i++)
                    if(array[i]['id'] == el['id'])
                        index = i
                return index
            }
        });
    }

    window.DocsifyGithubRepoContributors = {
        create: function(defaultTitle) {

            return plugin
        }
    }
})();