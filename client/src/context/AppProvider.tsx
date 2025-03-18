import { ReactNode } from "react"
import { AppContextProvider } from "./AppContext.js"
import { ChatContextProvider } from "./ChatContext.js"
import { FileContextProvider } from "./FileContext.js"
import { RunCodeContextProvider } from "./RunCodeContext.js"
import { SettingContextProvider } from "./SettingContext.js"
import { SocketProvider } from "./SocketContext.js"
import { ViewContextProvider } from "./ViewContext.js"
import { CopilotContextProvider } from "./CopilotContext.js"

function AppProvider({ children }: { children: ReactNode }) {
    return (
        <AppContextProvider>
            <SocketProvider>
                <SettingContextProvider>
                    <ViewContextProvider>
                        <FileContextProvider>
                            <CopilotContextProvider>
                                <RunCodeContextProvider>
                                    <ChatContextProvider>
                                        {children}
                                    </ChatContextProvider>
                                </RunCodeContextProvider>
                            </CopilotContextProvider>
                        </FileContextProvider>
                    </ViewContextProvider>
                </SettingContextProvider>
            </SocketProvider>
        </AppContextProvider>
    )
}

export default AppProvider
