import { MissionUtils } from "@woowacourse/mission-utils";

class CustomView {
    static async getStringForAdd() {
        return await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    }

    static async printResult(sumValue) {
        await MissionUtils.Console.print(`결과 : ${sumValue}`);
    }

    static async error(){
        await MissionUtils.Console.print('[ERROR]')
    }
}

export default CustomView;