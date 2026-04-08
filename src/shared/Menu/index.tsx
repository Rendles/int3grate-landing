'use client';

import { ElementType, forwardRef, ReactNode } from 'react';
import { Box, Icon, Menu as ChakraMenu } from '@chakra-ui/react';
import { PositioningOptions } from '@zag-js/popper';

import { Image } from '../Image';

import styles from './style.module.css';

export interface MenuItemData {
  value: string;
  valueText: ReactNode;
  icon?: ElementType;
}

export interface MenuProps {
  className?: string;
  title?: string;
  minWidth?: string;
  padding?: string;
  backgroundColor?: string;
  itemHover?: string;
  items: MenuItemData[];
  children: ReactNode;
  onItemClick?: (value: string) => void;
  positioning?: PositioningOptions;
  'aria-label'?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
  direction?: 'horizontal' | 'vertical';
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      items,
      title,
      children,
      onItemClick,
      positioning,
      className,
      minWidth,
      padding,
      itemHover,
      backgroundColor,
      'aria-label': ariaLabel,
      isOpen,
      onOpenChange,
      onClose,
      direction = 'vertical',
      ...props
    },
    ref
  ) => {
    return (
      <div className={className} ref={ref} {...props}>
        <ChakraMenu.Root
          aria-label={ariaLabel}
          positioning={positioning}
          size="md"
          open={isOpen}
          onOpenChange={(details) => onOpenChange?.(details.open)}>
          <ChakraMenu.Trigger asChild>{children}</ChakraMenu.Trigger>
          <ChakraMenu.Positioner>
            <ChakraMenu.Content
              css={{
                padding,
                backgroundColor,
                minWidth,
                borderRadius: '10px',
                zIndex: 1000
              }}>
              {title && <div className={styles.menuTitle}>{title}</div>}
              {onClose && (
                <button className={styles.menuCloseButton} style={{ padding }} onClick={onClose}>
                  <Image src="/icons/close-menu.svg" alt="document-close" width={24} height={24} />
                </button>
              )}
              <div
                className={styles.menuItems}
                style={{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }}>
                {items.map(({ value, valueText, icon }) => (
                  <ChakraMenu.Item
                    key={value}
                    value={value}
                    className={styles.menuItem}
                    css={{
                      '&:hover': { backgroundColor: itemHover },
                      background: 'transparent',
                      ...(direction === 'horizontal' ? { width: 'fit-content', padding: 0 } : {})
                    }}
                    onClick={() => onItemClick?.(value)}>
                    {icon && <Icon className={styles.menuIcon} as={icon} />}
                    <Box flex="1">{valueText}</Box>
                  </ChakraMenu.Item>
                ))}
              </div>
            </ChakraMenu.Content>
          </ChakraMenu.Positioner>
        </ChakraMenu.Root>
      </div>
    );
  }
);

Menu.displayName = 'Menu';
