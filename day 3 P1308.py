'''
target=input().upper()
passage=list(input().upper().split())
if target not in passage:
    print(-1)
else:
    count = 0
    index=passage.index(target)
    temp=''.join(passage[:index])
    index=len(temp)+index+1-1
    for str in passage:
        if str==target:
            count += 1
    print(count,index)
'''

target=input().upper()
passage=input().upper()
s1=' '+target+' '
s2=' '+passage+' '
f_index=s2.find(s1)
s2=list(s2.split())
count=s2.count(target)
if count == 0:
    print(-1)
else:
    print(count,f_index)

# 学会了find函数，count函数（“aaaaa”，有几个aa？答案为2，并非4，体现其【】寻找，找到直接到末尾），可能的问题在于非重叠计数
# 可能的问题在于，开头有空格！！！一开始不能直接split
