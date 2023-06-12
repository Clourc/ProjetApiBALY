export const getMaxId = (array: any[]): number => {
    return Math.max.apply(Math, array.map(function (game) {
      return game.id
    })
    )
  }

/*   export function getRandomGame(getMaxId:any){
    return (Math.random()*(getMaxId-1))+1;
} */
