import _JSXStyle from "next/dist/shared/lib/styled-jsx";
export default function Home({ fontFamily  }) {
    return <div className={_JSXStyle.dynamic([
        [
            "3892513b52a23034",
            [
                fontFamily
            ]
        ]
    ])}>

      <_JSXStyle id={"3892513b52a23034"} dynamic={[
        fontFamily
    ]}>{`body{font-family:${fontFamily}}code:before,code:after{content:"\`"}`}</_JSXStyle>

    </div>;
};