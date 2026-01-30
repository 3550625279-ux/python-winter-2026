'''
n=int(input())
student=[0]*(n+1)
for i in range(1,n+1):
    student[i].append(i)
    student[i].append(list(map(int, input().split())))
    student[i].append(student[i][1]+student[i][2]+student[i][3])
score_sort=sorted(student,key=lambda x:(-x[x[4]],-x[x[1]],x[x[0]]))
for i in range(5):
    print(score_sort[i][0],score_sort[i][4])

错误示范
'''

n=int(input())
Global_student=[]
for i in range(1,n+1):
    Chinese,Maths,English=list(map(int,input().split()))
    Scores=Chinese+Maths+English
    student=[Scores,Chinese,i]
    Global_student.append(student)
Global_student.sort(key=lambda x:(-x[0],-x[1],x[2]))#不会写sort函数自定义和lambda函数
for i in range(5):
    print(Global_student[i][2],Global_student[i][0])

'''
经过和Gemini的交流，我想我已经能够基本使用sort了
sort有参数key，告诉比较函数，只看key进行排序
而多级排序，运用元组，告诉比骄函数，先看……，如果相同看下一个位置的数字……
而key这里，需要一个函数，而这个函数刚好比较简短，所以用lambda函数即可
在使用lambda函数的时候，形式参数的类型是任意的，你可以随便使用（和C++有很大的不同）
'''