var app = new Vue({
    el: '#app',
    data: {
        todos : [
            {text : 'Faire une app to do list', number : 0},
            {text : 'Améliorer cette app', number : 1},
            {text : 'Passer au projet suivant', number : 2}
        ]
    },
    methods : {
        deleteTodo: function () {
            console.log("todo supprimé")
        }
    }
})