/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */
import React, { type CSSProperties, type ReactNode } from "react";

import styles from "./BrowserWindow.module.css";
import { ShadowDomWrapper } from "./ShadowDomWrapper";

interface Props {
  children: ReactNode;
  minHeight?: number;
  url: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  shadow?: boolean;
}

export function BrowserWindow({
  children,
  minHeight,
  style,
  bodyStyle,
  shadow = true
}: Props) {
  return (
    <div className={styles.browserWindow} style={{ ...style, minHeight }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: "#f25f58" }} />
          <span className={styles.dot} style={{ background: "#fbbe3c" }} />
          <span className={styles.dot} style={{ background: "#58cb42" }} />
        </div>
      </div>

      <div className={styles.browserWindowBody} style={bodyStyle}>
        {shadow ? <ShadowDomWrapper>{children}</ShadowDomWrapper> : children}
      </div>
    </div>
  );
}
