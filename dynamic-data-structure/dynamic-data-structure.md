# Dynamiczne struktury danych

Dynamiczne struktury danych są strukturami, które dopasowują się do wielkości danych bez potrzeby kopiowania całej struktury do nowej struktury która została powiększona.

Dynamiczne struktury danych są osiągane zazwyczaj z wykorzystaniem `wskaźników` przechowujących referencję do adresu pamięci, zmiennej która nas interesuje.

"Dynamiczne" tablice to zazwyczaj klasy z posiadające metody pozwalające na kopiowanie poprzedniej tablicy i zwrócenie nowej zmodyfikowanej struktury.

## Wskaźniki

Wskaźniki to zmienne przechowujące tylko adresy pamięci komputera. Najważniejszą zaletą wskaźników, które jest unikalne dla tych struktur jest to, że zwracają referencję do adresu pamięci pod którym przetrzymywana jest wartość.

Unikalność mechanizmu wskaźników które zwracają referencję do adresu pamięci, potrafi uprościć skomplikowane stryktury poprzez to, że nie ma potrzeby tworzenia zmiennych nawiązujących do kolejnych danych i marnowanie pamięci, kiedy możemy stworzyć jeden wskaźnik do głównej zmiennej i referować do niej w dalszej części kodu.

W języku TypeScript nie posiadamy wskaźników takich jak w języku C, C++. W języku TypeScript jak i w JS posiadamy jedynie referencję
