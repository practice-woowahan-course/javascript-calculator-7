const MESSAGE = {
  INFO: {
    INPUT_INFO: '덧셈할 문자열을 입력해 주세요.\n',
  },
  ERROR: {
    IS_EMPTY: '[ERROR] 입력값이 비었습니다.\n',
    NOT_POSITIVE_NUMBER: '[ERROR] 양수를 입력해주세요.',
    CANT_BE_NUMBER: '[ERROR] 숫자로 변환할 수 없는 값이 포함되어 있습니다.',
    DECIMALPOINT: '[ERROR] 소수점을 구분자로 쓸 수 없습니다',
  },
  OUTPUT: {
    RESULT: (result) => `결과 : ${result}`,
  },
};

export default MESSAGE;
