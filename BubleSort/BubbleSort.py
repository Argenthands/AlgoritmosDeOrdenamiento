def bubbleSort(arr):
    flag = True
    length = len(arr)
    while flag:
        flag = False
        for i in range(length-1):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                flag = True
    return arr
arr1 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
print(bubbleSort(arr1))
