def duplicateNum(arr) :
    new_arr = []
    for num in arr :
        if num in new_arr :
            continue
        else:
            new_arr.append(num)
    return new_arr
        
array1 = [1,2,3,4,5,6,7,6,5,4,3,2,1]
print(duplicateNum(array1))

array2 = [10,2,3,4,5,10,10,10,10,10,2,3]
print(duplicateNum(array2))

