import style from './avatar.module.css';
import { ImgHTMLAttributes,  } from 'react';

interface AvatarProps extends ImgHTMLAttributes< HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, src, alt}: AvatarProps) {
    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar } 
        src={src}
        alt={alt}
        />
        
    );

}