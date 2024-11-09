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

## Algorytmy wyszukiwania są dobrym sposobem na pokazanie działania tablicy