'''
n=int(input())
num_str=input().split()
num_list=[]
for s in num_str:
    num_list.append(int(s))
num_list=list(set(num_list))
num_list.sort()
print(len(num_list))
print(*num_list)我的第一种做法
'''

'''
_=int(input()) #不使用该变量的便捷技法
num_list=list(map(int,input().split()))
num_list=list(set(num_list))
num_list.sort()
print(len(num_list))
print(*num_list)
'''
_=int(input())
num_list=sorted(list(set(list(map(int,input().split())))))  #连续调用
print(len(num_list))
print(*num_list)


#实际上是对一开始过程的优化，批发处理转int 利用集合无序消重复，再利用list排序，最后注意输出格式，*的作用呢



