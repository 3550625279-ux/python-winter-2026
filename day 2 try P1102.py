'''
num_i=list(map(int,input().split()))
num_n=list(map(int,input().split()))
count=0
for i in num_n:
    for j in num_n:
        if j-i==num_i[1]:
            count+=1
print(count)
'''

# 空间换时间的思路，哈希表，查表代替for遍历

N,c=list(map(int,input().split()))
num_list=list(map(int,input().split()))
num_count={}
for i in num_list:
    if i in num_count:
        num_count[i]+=1
    else:
        num_count[i]=1
count=0
for j in num_list:
    k=j+c
    if k in num_count:
        count+=num_count[k]
print(count)

# 此题，看题解，貌似还有二分法以及双指针，暂时没有学习到那些算法