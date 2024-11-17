# Dynamiczne struktury danych

Dynamiczne struktury danych są strukturami, które dopasowują się do wielkości danych bez potrzeby kopiowania całej struktury do nowej struktury która została powiększona.

Dynamiczne struktury danych są osiągane zazwyczaj z wykorzystaniem `wskaźników` przechowujących referencję do adresu pamięci, zmiennej która nas interesuje.

"Dynamiczne" tablice to zazwyczaj klasy z posiadające metody pozwalające na kopiowanie poprzedniej tablicy i zwrócenie nowej zmodyfikowanej struktury.

## Wskaźniki

Wskaźniki to zmienne przechowujące tylko adresy pamięci komputera. Najważniejszą zaletą wskaźników, które jest unikalne dla tych struktur jest to, że zwracają referencję do adresu pamięci pod którym przetrzymywana jest wartość.

Unikalność mechanizmu wskaźników które zwracają referencję do adresu pamięci, potrafi uprościć skomplikowane stryktury poprzez to, że nie ma potrzeby tworzenia zmiennych nawiązujących do kolejnych danych i marnowanie pamięci, kiedy możemy stworzyć jeden wskaźnik do głównej zmiennej i referować do niej w dalszej części kodu.

W języku TypeScript nie posiadamy wskaźników takich jak w języku C, C++. W języku TypeScript jak i w JS posiadamy jedynie referencję

Wykorzystanie mechanizmu referencji w języki JS/TS jest dosyć uproszczone ze względu na to, że tworząc obiekt tworzymy od razu referencję do pod postacią zwykłej zmiennej. Również podczas wykorzystania słowa kluczowego `this` wewnątrz obiektu mamy możliwość odwoływania się bezpośrednio do jego metod.

Tworzenie nowej instancji klasy `LinkedList`, zmienna `list` jest teraz referencją do klasy `LinkedList`

```ts
const list = new LinkedList();
```

## Listy

Listy ze względu na to, że pozycja elementu jest względna wobec wartości jakie są w liscie przetrzymywane są dynamiczną strukturą danych, to jest największa zaleta List nad Tablicami.

Tablice przez to, że mają bezwzględną pozycję elementów, czyli każdy element ma swój indeks, który jest nie zmienny do czasu gdy nie zmienimy całej struktury tablicy, listy za to są względne wobec wartości, czyli pierwsza wartość wie, że stoi przed wartością drugą ale jak będziemy chcieli usunąć wartość drugą to nie musimy przesuwać wszystkich elementów za pierwszą wartością, jedynie wystarczy, że zmienimy wskaźnik w pierwszej wartości z drugiej na trzecią, i ta o to usunęliśmy wartość drugą z listy edytując tylko jeden element.

### Zużycie zasobów

Ze względu, że listy są podobną strukturą danych do tablic, ale muszą uzyskać o jeden element więcej czyli wskaźnik wskazujący na kolejny element, zużycie pamięci przedstawiamy następująco:

Mając tablice o rozmiarze K z wartościami N-bajtowymi, potrzebujemy K _ N bajtów pamięci. Natomiast jeżeli każdy wskaźnik wymaga kolejnych M bajtów, struktura listy potrzebuje K _ (M + N) bajtów wolnej pamięci.

## Tworzenie listy

Podczas tworzenia listy potrzebujemy na samym początku zdefiniować węzeł. Wezły w liście są odpowiedzialne za przetrzymywanie danych oraz wskaźników do kolejnych węzłów w liście, można rzecz że są podstawowym budulcem dynamicznych struktur danych.

> Trzeba zaznaczyć, że przykład listy w kodzie TypeScript może się dosyć różnić od przykładów w kodzie takim jak C++, ze względu na wykorzystanie wskaźników które dają surowy dostęp do pamięci wskazanej wartości. TypeScript jak i JavaScript wykorzystuję tylko mechanizm referencji.

#### Węzeł Listy

Przykład węzła w kodzie TypeScript:
Węzeł możemy rozszerzyć o właściwość `value` w której będziemy trzymać wartości i nie muszą być to wartości typu `number`

```ts
class ListNode {
  node: number;
  next: ListNode | null;

  constructor(node: number) {
    this.node = node;
    this.next = null;
  }
}
```

#### Lista połączona

Klasa `LinkedList` jest tak naprawdę wzorem na podstawie którego budujemy liste. Tą klasę będziemy rozwijać pod kątem metod oraz operacji jakie będziemy chcieli wykonywać na liście.

```ts
class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }
}
```

Metoda pozwalająca na dodanie elementu na końcu listy

```ts
append(node: number): void {
  const newNode = new ListNode(node);
  if (this.head === null) {
    this.head = newNode;
    return;
  }

  let current = this.head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
}
```

Metoda pozwalająca na dodanie elementu na samym początku listy

```ts
prepend(node: number): void {
  const newNode = new ListNode(node);
  newNode.next = this.head;
  this.head = newNode;
}
```
