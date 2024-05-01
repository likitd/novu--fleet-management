"use client";
import { useCookies } from "react-cookie";

import ThemeToggle from "@/components/ThemeToggle";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker";

import Schedule from "@/components/driver/Schedule";
import Vehicle from "@/components/driver/Vehicle";
import Map from "@/components/driver/Map";
import RouteMap from "@/components/driver/Route";
import DriverAuthButton from "@/components/driver/DriverAuthButton";
import { SavedInfo } from "@/components/driver/Profile";
import { Bio } from "@/components/driver/Bio";

export default function DashboardPage() {
  const [cookies] = useCookies(["username"]);
  const loginName = cookies.username;
  return (
    <>
      {/* <div className="md:hidden flex w-full h-screen justify-center items-center text-3xl font-bold">
        <h1>Not Supported</h1>
      </div> */}
      <div className="flex-col flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <div className="md:flex hidden">
                <CalendarDateRangePicker />
              </div>
              <ThemeToggle />
              <DriverAuthButton />
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="route">Route</TabsTrigger>
              <TabsTrigger value="parking">Parking</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SavedInfo userName={loginName} />
                  </CardContent>
                </Card>
                <Card className="col-span-4 lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Your Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Schedule userName={loginName} />
                  </CardContent>
                </Card>
                <Card className="col-span-4 lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Vehicle Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Vehicle userName={loginName} />
                  </CardContent>
                </Card>
                <Card className="col-span-4 lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Bio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Bio userName={loginName} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="route" className="space-y-4">
              <RouteMap userName={loginName} />
            </TabsContent>
            <TabsContent value="parking" className="space-y-4">
              <Map userName={loginName} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
