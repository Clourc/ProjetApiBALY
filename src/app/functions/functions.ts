export const getMaxId = (array: any[]): number => {
    return Math.max.apply(Math, array.map(function (game) {
      return game.id
    })
    )
  }