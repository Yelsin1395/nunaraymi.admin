// import { fromEvent, debounceTime, map, switchMap } from 'rxjs'
// import { ajax } from 'rxjs/ajax'

// const queryInput = document.querySelector('input#query')

// fromEvent(queryInput, 'input')
// 	.pipe(
// 		debounceTime(500),
// 		map((event) => event.target.value),
// 		switchMap((query) => ajax(`https://server.com/search?q=${query}`))
// 	)
// 	.subscribe((results) => {
// 		console.log('Results:', results)
// 	})
