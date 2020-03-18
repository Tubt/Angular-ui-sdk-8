﻿import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { BasicComponentsComponent } from './routes/basic-components/basic-components.component';
import { PivotTableComponentsComponent } from './routes/pivot-table-components/pivot-table-components.component';
import { SortingComponentsComponent } from './routes/sorting-components/sorting-components.component';
import { TimeOverTimeComparisonComponent } from './routes/time-over-time-comparison/time-over-time-comparison.component';
import { AttributeFilterComponentsComponent } from './routes/attribut-filter-components/attribut-filter-components.component';
import { ArithmeticMeasureComponentsComponent } from './routes/arithmetic-measure-components/arithmetic-measure-components.component';
import { DrillingComponentsComponent } from './routes/drilling-components/drilling-components.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFilterComponent } from './routes/date-filter/date-filter.component';
import { GlobalFiltersComponent } from './routes/global-filters/global-filters.component';
import { ParentFilterComponent } from './routes/parent-filter/parent-filter.component';
import { VisualizationByUriComponent } from './routes/visualization-by-uri/visualization-by-uri.component';
import { VisualizationByIdentifierComponent } from './routes/visualization-by-identifier/visualization-by-identifier.component';
import { ResponsiveChartComponent } from './routes/responsive-chart/responsive-chart.component';

const appRoutes: Routes = [
    { path: '', component: BasicComponentsComponent , canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'pivot-table', component: PivotTableComponentsComponent },
    { path: 'sorting', component: SortingComponentsComponent },
    { path: 'time-over-time-comparison', component: TimeOverTimeComparisonComponent },
    { path: 'attribute-filter-components', component: AttributeFilterComponentsComponent },
    { path: 'drilling', component: DrillingComponentsComponent },
    { path: 'visualization/visualization-by-uri', component: VisualizationByUriComponent },
    { path: 'visualization/visualization-by-identifier', component: VisualizationByIdentifierComponent },
    { path: 'arithmetic-measures', component: ArithmeticMeasureComponentsComponent },
    { path: 'date-filter-component', component: DateFilterComponent },
    { path: 'advanced/global-filters', component: GlobalFiltersComponent},
    { path: 'advanced/parent-filter', component: ParentFilterComponent},
    { path: 'advanced/responsive', component: ResponsiveChartComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

// export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    imports: [RouterModule.forChild(appRoutes), CommonModule],
    exports: [RouterModule],
})
export class AppRouting { }
