import pandas as pd

homework = pd.read_csv("my_data.csv");
print(homework)

# 1. Unnamed:0라고 표기되는 열을 지운다. 단 Unnamed:0라 쓰지말고 새롭게 컬럼 이름을 만들어서 지운다.
# Unnamed:0으로 나오는 열을 After로 변경하였다.
homework.rename(columns={'Unnamed: 0' : 'After'}, inplace=True)
print(homework)

# 2. 0,1,2,3,4로 보여지는 index 부분을 지운다.
# After 열을 삭제하였다.
homework.drop('After', axis=1, inplace=True)
print(homework)

# 3. name에 해당되는 영문 이름을 한글로 바꾼다.
# my_data2.csv파일의 name값이 한글이기 때문에 my_data2의 name값을 넣어준다.
convert = {
    'Alice' : '앨리스',
    'Bob' : '밥',
    'Charlie' : '찰리',
    'James' : '제임스'
}
homework['name'] = homework['name'].map(convert)
print(homework)

# 4. salary에 해당되는 숫자를 000 세자리 단위로 콤마를 넣어서 값을 바꿔 넣는다.
# pandas의 apply함수를 이용해서 매개변수로 받는 함수를 실행시켜 컬럼을 일괄 변경할 수 있다.

homework['salary'] = homework['salary'].apply(lambda salary : '{:,}'.format(salary))
print(homework)

# 5. 1~4를 처리하고 나서 csv파일로 저장한다.
homework.to_csv('homework.csv')

