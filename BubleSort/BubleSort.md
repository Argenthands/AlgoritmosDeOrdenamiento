# BubleSort:
## Descripción:
El algoritmo de ordenamiento por burbuja es un algoritmo de ordenamiento sencillo. Funciona revisando cada elemento de la lista que va a ser ordenada con el siguiente, intercambiándolos de posición si están en el orden equivocado. Es necesario revisar varias veces toda la lista hasta que no se requiera ningún intercambio, lo que significa que la lista está ordenada.
## Pseudocódigo:
```
procedure bubbleSort( A : lista de números enteros )
    n = longitud(A)
    repetir
        swapped = falso
        para i = 1 hasta n-1 inclusive hacer
            /* si este par está desordenado */
            if A[i-1] > A[i] entonces
                /* intercambiarlos y recordar que algo ha cambiado */
                swap( A[i-1], A[i] )
                swapped = verdadero
            fin si
        fin para
    hasta que swapped = falso
fin procedimiento
```
## Código:
- Python:
    ```python
    def bubbleSort(arr):
        n = len(arr)
        for i in range(n):
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1] :
                    arr[j], arr[j+1] = arr[j+1], arr[j]
    ```
    ### Ejemplo:
    ```python
    arr = [64, 34, 25, 12, 22, 11, 90]
    bubbleSort(arr)
    print ("Sorted array is:")
    for i in range(len(arr)):
        print ("%d" %arr[i]),
    ```
    ### Salida:
    ```
    Sorted array is:
    11 12 22 25 34 64 90
    ```
- JavaScript:
    ```javascript
    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = len-1; i>=0; i--){
            for(var j = 1; j<=i; j++){
                if(arr[j-1]>arr[j]){
                    var temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
    ```
    ### Ejemplo:
    ```javascript
    var arr = [64, 34, 25, 12, 22, 11, 90];
    bubbleSort(arr);
    console.log(arr);
    ```
    ### Salida:
    ```
    [11, 12, 22, 25, 34, 64, 90]
    ```
## Complejidad:
El algoritmo de ordenamiento por burbuja tiene una complejidad de tiempo cuadrática, O(n2) en el peor de los casos y O(n) en el mejor de los casos. El algoritmo de ordenamiento por burbuja es ineficiente en la práctica y no se usa, pero es un buen ejemplo de un algoritmo de ordenamiento simple. También es útil para estudiar el análisis de algoritmos.