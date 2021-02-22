import {Status} from "language-features/007-enum";


test("default", () => {
    expect(Status.OK).toEqual(0)
    expect(Status.Warning).toEqual(1)
    expect(Status.Critical).toEqual(2)

})

test("reverse mapping", () => {
    expect(Status[Status.OK]).toEqual("OK")
    expect(Status[Status.OK]).toEqual("OK")

})
