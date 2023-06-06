Setup the URI for future quick and easy use

export const callAPI = function (
  http: HttpClient,
  endpoint: string
): Observable<any[]> {
  let headers = new HttpHeaders({
    'x-rapideapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '79c75eb211mshb564487928aea55p1d8226jsn01360c399d44',
  });

  const basicURI: string =
    'https://free-to-play-games-database.p.rapidapi.com/api/';

  return http.get<any>(`${basicURI}${endpoint}`, {
    headers: headers,
  });
};

----------------------------------------------------------------------
Use of the URI function, adding the endpoint of the URI for the Http request

ngOnInit(): void {
    callAPI(this.http, 'games?platform=browser').subscribe((data) => {
      console.log(data);
      if (data.length === 1) {
        this.gamesToDisplay.push(data);
      } else {
        for (let i = 0; i < 8; i++) {
          this.gamesToDisplay.push(data[i]);
        }
      }
    });
}