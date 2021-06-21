import { CouplingComponent } from './misc/coupling/coupling.component';
import { TypecastingComponent } from './advanced/typecasting/typecasting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStructuresComponent } from './advanced/data-structures/data-structures.component';
import { DelegatesComponent } from './advanced/delegates/delegates.component';
import { DependencyInjectionComponent } from './advanced/dependency-injection/dependency-injection.component';
import { ExceptionHandlingComponent } from './advanced/exception-handling/exception-handling.component';
import { GenericsComponent } from './advanced/generics/generics.component';
import { IndexersComponent } from './advanced/indexers/indexers.component';
import { LinqComponent } from './advanced/linq/linq.component';
import { MultiThreadingComponent } from './advanced/multi-threading/multi-threading.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { BuildingBlocksComponent } from './building-blocks/building-blocks.component';
import { CsharpComponent } from './csharp.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { GetPostComponent } from './get-post/get-post.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AbstractionComponent } from './oops/abstraction/abstraction.component';
import { AccessModifiersComponent } from './oops/access-modifiers/access-modifiers.component';
import { ConstructorDestructorComponent } from './oops/constructor-destructor/constructor-destructor.component';
import { EncapsulationComponent } from './oops/encapsulation/encapsulation.component';
import { InheritanceComponent } from './oops/inheritance/inheritance.component';
import { PolymorphismComponent } from './oops/polymorphism/polymorphism.component';
import { ReflectionComponent } from './advanced/reflection/reflection.component';

const routes: Routes = [{
  path: '', component: CsharpComponent, children: [
    { path: 'building', component: BuildingBlocksComponent, data: { title: 'C# - Building Blocks' } },
    { path: 'design', component: DesignPatternsComponent, data: { title: 'C# - Design Patterns' } },
    { path: 'algorithms', component: AlgorithmsComponent, data: { title: 'C# - Algorithms' } },
    { path: 'get', component: GetPostComponent, data: { title: 'C# - Get/Post' } },
    { path: 'abstraction', component: AbstractionComponent, data: { title: 'C# - Abstraction' } },
    { path: 'access', component: AccessModifiersComponent, data: { title: 'C# - Access Modifiers' } },
    { path: 'constructor', component: ConstructorDestructorComponent, data: { title: 'C# - Constructor' } },
    { path: 'encapsulation', component: EncapsulationComponent, data: { title: 'C# - Encapsulation' } },
    { path: 'inheritance', component: InheritanceComponent, data: { title: 'C# - Inheritance' } },
    { path: 'polymorphism', component: PolymorphismComponent, data: { title: 'C# - Polymorphism' } },
    { path: 'datastructure', component: DataStructuresComponent, data: { title: 'C# - Data Structures' } },
    { path: 'delegates', component: DelegatesComponent, data: { title: 'C# - Delegates' } },
    { path: 'dependency', component: DependencyInjectionComponent, data: { title: 'C# - Dependency Injection' } },
    { path: 'exception', component: ExceptionHandlingComponent, data: { title: 'C# - Exception Handling' } },
    { path: 'generics', component: GenericsComponent, data: { title: 'C# - Generics' } },
    { path: 'indexers', component: IndexersComponent, data: { title: 'C# - Indexers' } },
    { path: 'linq', component: LinqComponent, data: { title: 'C# - Linq' } },
    { path: 'multithreading', component: MultiThreadingComponent, data: { title: 'C# - Multithreading' } },
    { path: 'keywords', component: KeywordsComponent, data: { title: 'C# - Keywords' } },
    { path: 'reflection', component: ReflectionComponent, data: { title: 'C# - Reflection' } },
    { path: 'typecasting', component: TypecastingComponent, data: { title: 'C# - Type Casting' } },
    { path: 'coupling', component: CouplingComponent, data: { title: 'C# - Coupling' } },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsharpRoutingModule { }
export const csharpRoutingComponents = [
  CsharpComponent,
  BuildingBlocksComponent,
  DesignPatternsComponent,
  AlgorithmsComponent,
  GetPostComponent,
  AbstractionComponent,
  AccessModifiersComponent,
  ConstructorDestructorComponent,
  EncapsulationComponent,
  InheritanceComponent,
  PolymorphismComponent,
  DataStructuresComponent,
  DelegatesComponent,
  DependencyInjectionComponent,
  ExceptionHandlingComponent,
  GenericsComponent,
  IndexersComponent,
  LinqComponent,
  MultiThreadingComponent,
  KeywordsComponent,
  ReflectionComponent,
  TypecastingComponent,
  CouplingComponent
];
