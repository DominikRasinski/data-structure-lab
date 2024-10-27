# Repozytorium do testowania jak działają struktury danych

## Uruchamianie projektu

Aby uruchomić projekt należy mieć ściągniętą paczkę umożliwiającą skompilowanie pliku `TypeScript`

### Uruchomienie TypeScript kodu za pomocą ts-node

**Instalacja**</br>
`npm i -D ts-node`</br>
**Kompilowanie**</br>
`npx ts-node example.ts`

### Uruchomienie TypeScript kodu za pomocą tsx

**Instalacja**</br>
`npm i -D tsx`</br>
**Kompilowanie**</br>
`npx tsx example.ts`

## Opis typów danych

### Typy prymitywne

> Typ prymitywny to podstawowy typ danych, który przechowuje bezpośrednio wartości, a nie referencje do obiektów. Są one zazwyczaj bardziej wydajne i zajmują mniej pamięci niż typy złożone.

- Liczby całkowite
- Liczby zmiennoprzecinkowe
- Znaki
- Wartości logiczne
- Symbole
  > Symbol to prymitywny typ danych, który jest unikalnym i niezmiennym identyfikatorem. Każdy symbol jest unikalny, nawet jeśli dwa symbole mają ten sam opis.

### Typy złożone (referencyjne)

> Referencja to mechanizm polegający na przechowywaniu przez zmienną adresu pamięci, gdzie znajdują się rzeczywiste dane. Kiedy przypisujesz jedną zmienną do drugiej, obie zmienne wskazują na ten sam obiekt w pamięci.

- Tablice
- Klasy
- Interfejsy
- Kolekcje
- Obiekty
- Stringi

## Typ danych tablica

Tablica to jeden z bardziej powszechnych typów danych pozwalających na proste uporządkowanie większej ilości zmiennych, które są wobec siebie zależne. Na przykład prostym przykładem gdzie tablica powinna zostać wykorzystana to projekt, w którym chcemy śledzić ilość wypitej **herbaty** dziennie i mamy dwa proste rozwiązania:

### 1 możemy wykorzystać do przechowywania wypitej herbaty na dzień prostych deklaracji zmiennych

```ts
const dzien1 = 1;
const dzien2 = 4;
const dzien3 = 5;
const dzien4 = 1;
```

Rozwiązanie takie zadziała, ale wszystkie zmienne nie posiadają powiązania z sobą, pierwsza zmienna `dzien1` nie wie o istnieniu zmiennej `dzien4` i zmiennych pomiędzy nimi. Co powoduje, że edytowanie takiej struktury danych jest dosyć uciążliwym zadaniem.

### 2 wykorzystanie tablicy jako struktury, w której będziemy mogli przechowywać ilość wykrytej herbaty na dzień

```ts
const iloscWypitejHerbatyDziennie = [1, 4, 5, 1];
```

Jak możemy, zauważyć taki zapis jest, o wiele przyjemniejszy i krótszy niż deklaracja czterech różnych zmiennych przechowujących wartości ile skonsumowanej herbaty zostało per dzień. Również najważniejszą zaletą takiej tablicy jest to, że zmienne mają informacje na swój temat, w jakim dokładnie miejscu się znajdują.

#### Jak dostać się do wartości przechowywanych przez tablice

Struktura danych udostępnia nam nową mechanikę dostawania się do wartości zapisanych na danych komórkach pamięci, które zostały przydzielone tablicy, a mianowicie chodzi o odwoływanie się do wartości za pomocą `indeksów` pierwszy element tablicy zaczyna się od `0`, czyli aby dostać się do pierwszej wartości musimy zrobić taki zapis naszej tablicy:

```ts
iloscWypitejHerbatyDziennie[0]; // zwroci nam wartosc 1
iloscWypitejHerbatyDziennie[2]; // zwroci nam wartosc 5
```

Więcej informacji na temat zaawansowanych technik w tablicach [tablice zachowanie](./arrays/arraysParts.md)
