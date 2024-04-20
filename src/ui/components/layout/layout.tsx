import { SessionStatusTypes } from "@/types/session-status-types";
import { BreadCrummbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigations"
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Sesssion } from "../session/session";
import { CallsToActionSideBarContribution } from "../calls-to-action/call-to-action-side-bar-contribution";

interface Props {
    children: React.ReactNode
    isDisplayBreadcrumbs?: boolean;
    withSidebar?: boolean;
    sessionStatus ?: SessionStatusTypes,

}

export const Layout = ({ children, isDisplayBreadcrumbs = true,
     withSidebar,sessionStatus,
 }: Props) => {

    let view: React.ReactElement = <></>;

    if (withSidebar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3 space-y-8">
                    <UserAccountNavigation/>
                    <CallsToActionSideBarContribution/>
                    </div>

                    <div className="col-span-9 ">{children}</div>
                </div>

            </Container>
        )
    }
    else {
        view = <>{children}</>;
    }

    return (
        <Sesssion sessionStatus={sessionStatus }>
            <Navigation />
            {isDisplayBreadcrumbs && <BreadCrummbs />}
            {view}
            <Footer />
        </Sesssion>
    )
} 