import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'B1',
    Board: () => (
        <div>
            <img
                src="https://raw.githubusercontent.com/ettomarett/attempt-1/main/imgs/x.png?token=GHSAT0AAAAAACCM74LU6XUROVTTRY5STAB2ZC2B7FQ"
                className="bgg"
            />
            <img
                src="https://raw.githubusercontent.com/ettomarett/attempt-1/main/imgs/x.png?token=GHSAT0AAAAAACCM74LURQ6P3ABSX6MDAU5CZC2CG5Q"
                className="nicebg"
            />
            <div>
                <input className="input" />
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
