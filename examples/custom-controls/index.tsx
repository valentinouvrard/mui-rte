import React, { FunctionComponent } from 'react'
import { Chip, Avatar, Button } from '@material-ui/core'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import MUIRichTextEditor from '../../'
import { TToolbarComponentProps } from '../../src/components/EditorControls'

const save = (data: string) => {
    console.log(data)
}

const MyBlock = (props: any) => {
    return (
        <div style={{
            padding: 10,
            backgroundColor: "#ebebeb"
        }}>
            My Block says:
            {props.children}
        </div>
    )
}

const MyCallbackComponent: FunctionComponent<TToolbarComponentProps> = (props) => {
    return (
        <Chip 
            id={props.id}
            avatar={<Avatar>C</Avatar>} 
            onClick={props.onMouseDown}
            label="Callback"
            disabled={props.disabled}
        />
    )
}

const MyBlockComponent: FunctionComponent<TToolbarComponentProps> = (props) => {
    return (
        <Button
            id={props.id}
            variant="contained"
            onMouseDown={props.onMouseDown}
            color={props.active ? "primary": "default"}
            disabled={props.disabled}
        >
            My Block
        </Button>
    )
}

const CustomControls = () => {
    return (
        <MUIRichTextEditor 
            label="Type something here..."
            onSave={save}
            controls={["title", "bold", "my-block", "my-style", "clear", "my-callback", "save"]}
            customControls={[
                {
                    name: "my-style",
                    icon: <InvertColorsIcon />,
                    type: "inline",
                    inlineStyle: {
                        backgroundColor: "black",
                        color: "white"
                    }
                },
                {
                    name: "my-block",
                    component: MyBlockComponent,
                    type: "block",
                    blockWrapper: <MyBlock />
                },
                {
                    name: "my-callback",
                    component: MyCallbackComponent,
                    type: "callback",
                    onClick: (_, name) => {
                        console.log(`Clicked ${name} control`)
                    }
                }
            ]}
        />
    )
}

export default CustomControls