import Link from "next/link";
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

interface BaseProps {
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
}

type ButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

type LinkButtonProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type Props = ButtonProps | LinkButtonProps;

export default function Button(props: Props) {
    const {
        children,
        fullWidth = true,
        className = "",
        ...rest
    } = props;

    const classes = `xm-button ${fullWidth ? "xm-button-full" : ""} ${className}`.trim().replace(/\s+/g, " ");

    if ("href" in props && props.href) {
        return (
            <Link
                href={props.href}
                className={classes}
                {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type="button"
            className={classes}
            {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
}