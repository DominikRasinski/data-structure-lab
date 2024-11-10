# Zaawansowane techniki, jakie możemy wykonywać na tablicy

Najważniejszą częścią tablic jest to, że tablice są specjalnymi obiektami pozwalają na grupowanie dużej ilości danych w powiązanych z sobą komórkach pamięci.

Przewagą tablic jest to, że są proste do odczytu oraz zapisu. Ale modyfikacja tablicy jest złożona, ponieważ nie można ot, tak dodać wewnątrz niej nowego elementu, ponieważ będzie trzeba przestawić elementy przed i za nią

### Obliczanie pozycji elementów

Wzór obliczający pozycję i-tego elementu w tablicy zaczynającej indeksację od zera:

```
pozycja(element i) = pozycja(początek tablicy) + rozmiar każdego elemetu * i
```

Wzór obliczający pozycję i-tego elementu w tablicy zaczynającej indeksację od jedynki:

```
pozycja(element i) = pozycja(początek tablicy) + rozmiar każdego elemetu * (i - 1)
```

## Przesunięcie w tablicy
Aby dokonać przesunięcia wszystkich elementów w tablicy, nie możemy po prostu dokonać nadpisania pierwszego pojemnika drugim, ponieważ skończymy z tablicą zawierającą wartość drugiego pojemnika.

**Przykład**
```
A = [i,j];
A[i] = A[j];
A = [j,j]
```

Aby przesunięcie elementów było możliwe, musimy skorzystać z tak zwanego żonglowania wartościami w tablicy, do czego przyda nam się prosty algorytm, w którym będziemy zapisywać jedną wartość do zmiennej tymczasowej.

**Algorytm**
```
temp = A[i]
A[i] = A[j]
A[j] = temp
```
**Zmienna tymczasowa przyjmuje zazwyczaj nazwę `temp`**

## Algorytmy wyszukiwania oraz sortowania są dobrym sposobem na pokazanie działania tablicy
Algorytmy wyszukiwania oraz sortowania pozwalają na przećwiczenie działanie tablic i pokazanie ich zalet, jakie płyną z szybkiego dostępu do danych za pomocą indeksacji oraz szybkiego dodawania nowych elementów na końcu tablicy.

Wadą tablicy jest jej bardzo słaba ekonomiczność czasowa w momencie modyfikacji polegającej na dodaniu nowego elementu pomiędzy już istniejącymi elementami. Ze względu na to, że taka modyfikacja wymaga przesunięcia wszystkich pozostałych elementów o _n_ indeksów.

> Ważna UWAGA struktury danych nienależące do typów prymitywnych często operują bezpośrednio na pamięci, także kopia przez przypisanie tablicy do nowej zmiennej nie zadziała, trzeba wykorzystać do tego metod zwracających nowe tablice jak na przykład metoda `map` oraz metody edytujące tablice slice itp.

### Algorytm liniowego sortowania
Algorytm liniowego sortowania jest doskonałym ćwiczeniem na pokazanie jak można się obchodzić z danymi wewnątrz tablicy i jak możemy modyfikować położenie wartości wewnątrz tablic.

Algorytmy sortowanie są tak naprawdę opakowaniem, jak nie rozwinięciem algorytmy przesunięcia elementów w tablicy 

```
temp = A[i]
A[i] = A[j]
A[j] = temp
```

Tylko są obudowywane logiką sprawdzającą, czy `element[i]` jest większy od `elementu[j]`

### Algorytm binarnego wyszukiwania
Algorytm wyszukiwania binarnego doskonale pokazuje nam jak szybko możemy się dostać do elementów w indeksowanej strukturze i jak możemy takie zachowanie struktury wykorzystać na swoją korzyść.

> Algorytm przeszukiwania binarnego działa poprawnie tylko na posortowanych danych.

